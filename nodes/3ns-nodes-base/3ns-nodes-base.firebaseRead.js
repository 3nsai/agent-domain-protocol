const { NodeOperationError } = require('n8n-workflow');
const admin = require('firebase-admin');

module.exports = {
    displayName: 'Firebase Read',
    name: '3ns-nodes-base.firebaseRead',
    group: ['transform'],
    version: 1,
    description: 'Read data from Firebase Firestore',
    defaults: {
        name: 'Firebase Read',
        color: '#FFCA28',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
        {
            displayName: 'Service Account Key Path',
            name: 'serviceAccountPath',
            type: 'string',
            default: '',
            placeholder: '/path/to/serviceAccountKey.json',
            required: true,
            description: 'Path to your Firebase Service Account key file',
        },
        {
            displayName: 'Collection',
            name: 'collection',
            type: 'string',
            default: '',
            placeholder: 'dietary_requirements',
            required: true,
            description: 'The Firestore collection to read from',
        },
        {
            displayName: 'Document ID',
            name: 'documentId',
            type: 'string',
            default: '',
            placeholder: 'user_id',
            required: true,
            description: 'The ID of the document to retrieve',
        },
    ],

    async execute() {
        const serviceAccountPath = this.getNodeParameter('serviceAccountPath', 0);
        const collection = this.getNodeParameter('collection', 0);
        const documentId = this.getNodeParameter('documentId', 0);

        try {
            // Initialize Firebase if not already initialized
            if (!admin.apps.length) {
                const serviceAccount = require(serviceAccountPath);
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                });
            }

            const db = admin.firestore();
            const doc = await db.collection(collection).doc(documentId).get();

            if (!doc.exists) {
                throw new NodeOperationError(this.getNode(), `Document with ID "${documentId}" does not exist in collection "${collection}".`);
            }

            return this.prepareOutputData([{ json: doc.data() }]);
        } catch (error) {
            throw new NodeOperationError(this.getNode(), `Firebase Read Error: ${error.message}`);
        }
    },
};
