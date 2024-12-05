# Agent Domain Protocol (ADP)

Agent Domain Protocol (ADP) is an open-source standard for enabling AI-driven intelligence, discovery, and cross-chain workflows for .Web3 domains. It bridges the gap between decentralized naming systems and intelligent agents, providing a unified way to define, discover, and execute agent-based workflows.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Top Features](#top-features-at-a-glance)  
3. [Quick Start](#quick-start)  
4. [Domain Architecture](#domain-architecture)  
5. [Discovery and Reputation](#discovery-and-reputation)  
6. [Workflows](#workflows)  
7. [Workflow Syntax](#workflow-syntax)  
8. [Example Workflows](#example-workflows)  
9. [Integrated and Compatible Projects](#integrated-and-compatible-projects)  
10. [Contributing](#contributing)  
11. [License](#license)  

---

## Introduction

The future of Web3 is intelligent, interoperable, and decentralized.

Agent Domain Protocol provides a foundation for creating and managing intelligent agents backed by .Web3 domains. With support for multichain deployment, AI-driven workflows, decentralized reputation systems, and tokenized governance, ADP empowers developers to build ecosystems where agents perform tasks, negotiate terms, and evolve over time.

---

## Top Features at a Glance:

1. **Domain Architecture**: The Domain Architecture of ADP redefines digital assets and utilises the full power of blockchain technology with advanced on-chain versioning, seamless intelligence merging,  on-chain rollback capabilities and integrated blockchain-based payments, enabling robust multichain interoperability and decentralized governance for dynamic ecosystems.
2. **Discovery and Reputation**: Advanced metadata indexing, automonous agent discovery and decentralized reputation scoring ensure trust and discoverability.  
3. **Agent Workflows**: AI-driven workflows with seamless multichain execution, supported by N8N-compatible syntax for drag-and-drop ease.  
4. **Agent Frameworks**: Supports a number of agent (decentralised like Fetch.ai, as well as, Google GenKit, Langchain, Autogen, CrewAI and more) frameworks is not opinionated on which one your agent chooses to utilise.   
5. **Cross-Chain Interoperability**: Native support for Ethereum, Moonbeam, Polygon, Fetch.ai, Near and more for seamless multichain operations.  

### Key repositories:

The ADP embeds powerful, autonomous intelligence directly into digital assets. This capability allows agents to independently negotiate, act, and optimize communication across ecosystems, from high-level AI reasoning to low-level binary protocols.  

To complement this open protocol, we've provided tools and libraries to simplify implementation:  
- **[3NS Smart Contracts](https://github.com/3nsai/3NS)**: A fork of ENS contracts designed to support ADP.  
- **[3NS Frontend dApp](https://github.com/3nsai/web3names-app)**: Manage .Web3 domains through a seamless UI.  
- **[3NS MetaMask Snap Plugin](https://github.com/3nsai/web3names-snap)**: Enable direct wallet-based domain interactions.  
- **[3NS Subgraph](https://github.com/3nsai/3ns-subgraph)**: Optimize domain discovery and indexing with our subgraph.  

*Certain repositories, due to the transformative potential they hold, remain private as we refine and secure their capabilities. Among these are our autonomous WebRTC agent-to-agent communication binary protocol and the Collective DAO framework, both designed to completely change the way we currently utilise the web through decentralized autonomous agent collaboration. These innovations will be unveiled in alignment with community input and ethical considerations of their powerful impact.  

We actively collaborate with leading Web3 and AI open-source initiatives, including OpenWebUI, Ollama, Near, Solana, and Polkadot. For the full scope of integrations, refer to the **[Integrated and Compatible Projects](#integrated-and-compatible-projects)** section. If you would like to propose an integration or join our development ecosystem, we welcome your input.  

Our ongoing research also includes exploring DeFi innovations such as Beefy Protocol, further expanding the horizons of intelligent, autonomous agents in the Web3 landscape. Join us on [Discord](https://discord.com/invite/5rJgQTnV4s) to contribute and stay informed.*

---

## Quick Start

### Get Started in Minutes

## Prerequisites

You need the following installed on your development machine:

* [git](https://git-scm.com/downloads)
* Node.js and pnpm. Minimum version Node 18. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Install n8n with:
  ```
  pnpm install n8n -g
  ```
* Recommended: follow n8n's guide to [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Using ADM

These are the basic steps for working with this repo. 

1. Clone the repo:
   ```
   git clone https://github.com/3nsai/agent-domain-protocol.git
   ```
2. Run `pnpm i` to install dependencies.
3. Open the project in your editor.
4. Browse the examples in `/nodes` and `/credentials`. Modify the examples, or replace them with your own nodes.
5. Update the `package.json` to match your details.
6. Run `pnpm lint` to check for errors or `pnpm lintfix` to automatically fix errors when possible.
7. Test your node locally. Refer to N8N [Run your node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) for guidance.
8. Replace this README with documentation for your node. Use the [README_TEMPLATE](README_TEMPLATE.md) to get started.
9. Update the LICENSE file to use your details.
10. [Publish](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) your package to npm.

## More information on N8N

Refer to N8N [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

---

### Key Capabilities:

1. **Domain Architecture**: Tokenized, multichain-enabled domains supporting decentralized governance and collective decision-making. 
2. **Discovery and Reputation**: Advanced metadata indexing, autonomous agent discovery and decentralized reputation scoring ensure trust and discoverability.  
3. **Agent Workflows**: N8N-compatible syntax for drag-and-drop ease with 100s of powerful extensions.


## Domain Architecture

The **Domain Architecture** of ADP represents a significant leap forward in empowering digital assets across chains. Whether it is an NFT on an EVM, Solana, Ordinal on Stacks each domain is a tokenized decnetralised entity, embedded with a powerful ADP (defined in protocol_spec.json) that is stored decentrally and define its AI logic and workflow functionality within both decentralized and wider traditional web ecosystems.

1. **Multichain Registration**:  
   Domains can be registered across multiple blockchains, ensuring interoperability. Metadata stored with domains includes critical details like their registries, transaction hashes, and timestamps.  

   JSON implementation:  
   ```json
   "domain": {
       "name": "dietitianAI.web3",
       "did": "did:web3:dietitianAI.web3",
       "collective": {
           "token_shortcode": "DIET",
           "token_address": "0x324342432",
           "dao_governor": "0xew34234234"
       }
       "chains": [
            {
                "chain_id": 1284,
                "chain_name": "Moonbeam",
                "created_at": 1697472000,
                "ens_registry": "0xENSRegistryAddressOnMoonbeam",
                "resolver": "0xPublicResolverAddressOnMoonbeam",
                "subgraph_url": "https://subgraph.url/moonbeam",
                "transaction_hash": "0xTxHashOfBurnOnMoonbeam"
            },
            {
                "chain_id": 1,
                "chain_name": "Ethereum",
                "created_at": 1697572000,
                "ens_registry": "0xENSRegistryAddressOnEthereum",
                "resolver": "0xPublicResolverAddressOnEthereum",
                "subgraph_url": "https://subgraph.url/ethereum",
                "transaction_hash": "0xTxHashOfBurnOnEthereum"
            }
        ]
   }
   ```

2. **Tokenized Collectives**:  
   Domains support tokenization, enabling decentralized decision-making, staking, and value-sharing. Domains can act as collective DAOs, where governance is driven by holders of native tokens.

3. **Decentralized Governance**:  
   Updates and decision-making are handled on-chain through voting mechanisms, providing transparency and equity for domain stakeholders.

---

## Discovery and Reputation

Discoverability and trust are foundational to ADP, enabling agents to locate and assess each other effectively.

### Features:

1. **Agent Discovery**:  
   Metadata includes tags, workflow descriptors, and intent definitions. These elements are indexed to allow efficient search and discovery.  

   Example:  
   ```json
   "discovery": {
       "tags": ["dietitian", "nutrition"],
       "workflow_descriptors": {
           "fetch_nutrition_data": "Retrieve detailed nutrition data from trusted sources."
       }
   }
   ```

2. **Reputation Framework**:  
   The protocol integrates decentralized identity (DID) with verifiable credentials, allowing agents to build trust. Reputation scores are calculated based on reviews, performance, and more.  

---

## Workflows

ADP workflows are the beating heart of agent automation, enabling tasks to execute seamlessly across chains. There is full support for the visual editor including drag-and-drop ease. We wanted to make sure non-technical users could leverage the full capabilities of the ADP without having to program. Using N8N-compatible syntax, workflows are designed for flexibility and simplicity. Our belief is more simple time-tested ETL based workflows work much better for most business tasks. So we focused on N8N compatibility which offers a variety of off-the-shelf plugins from Outlook to Asana functionality incombination with several of our own plugins that work seamlessless with decentralised projects and autonomous agent innovation.

### Example Nodes:

#### Merge Workflow Node:
```json
{
  "type": "web3-nodes-base.merge",
  "parameters": {
    "merge_policy": "destination_priority",
    "source_domain": "blockchain://veganchef.web3",
    "destination_domain": "blockchain://dietitianAI.web3"
  },
  "position": [520, 300]
}
```

#### Payment Workflow Node:
```json
{
  "type": "web3-nodes-base.payments",
  "parameters": {
    "escrow_uri": "blockchain://escrow.fetch.ai/escrow123",
    "supported_methods": ["USDT", "FET", "NEAR"],
    "base_fee": "0.01 FET",
    "variable_fee": "0.005% of task value"
  },
  "position": [720, 400]
}
```

---

## Workflow Syntax

ADP workflows adopt N8N-compatible syntax to simplify workflow design and execution. Nodes define individual tasks, while connections define their dependencies.



---

## Example Workflows

### Multistep Workflow with Decentralized Functionality Example

The workflow represents an **autonomous event planning system** that combines decentralized technologies, AI, and external APIs to streamline the organization of events. Its purpose is to demonstrate how a domain like dietian.web3 can have an intelligent system catering an event - it independently coordinate complex tasks like venue selection, catering, and handling sensitive information securely. Specifically, it aims to:

1. **Venue Selection**:
   - Find suitable venues for hosting events using external APIs (Google Places).
   - Provide actionable data (name, address) to event organizers or downstream systems.

2. **Catering Management**:
   - Retrieve catering options from decentralized sources (Ethereum smart contracts) and centralized databases (Google Sheets).
   - Aggregate this data for comparison and decision-making.

3. **Dietary Requirement Handling**:
   - Ensure sensitive dietary information is securely retrieved and processed using blockchain (Firebase Firestore and NEAR).
   - Safeguard privacy and compliance while preparing catering plans based on specific user requirements.

4. **Task Automation and Execution**:
   - Define and execute intents on-chain using NEAR smart contracts.
   - Coordinate tasks like event planning and catering to ensure autonomous and atomic execution of required operations.

### What It Does in Practice
The workflow automates the essential components of planning a conference or similar event:
- It **finds venues** that match the organizer’s requirements.
- It **aggregates catering options** for cost-effectiveness and quality.
- It **processes dietary preferences** securely for personalized catering.
- It **coordinates execution** of event planning tasks using blockchain-based smart contracts.

By doing so, the workflow reduces the need for manual intervention, ensures transparency and security, and leverages decentralized systems to build trust among stakeholders. This serves as a prototype for intelligent, decentralized systems capable of managing real-world logistics autonomously.

### Code Description and Purpose

The code provided orchestrates a multi-step process involving multiple technologies and APIs to manage tasks related to event planning, catering, and dietary requirements. Here's a detailed breakdown of what each part of the code does:

---

#### **Setup**
1. **NEAR Setup**:
   - Configures a NEAR blockchain account using `near_api`.
   - Prepares to execute smart contract function calls on NEAR for processing sensitive data and managing intents.

2. **Ethereum Setup**:
   - Initializes a Web3 instance connected to Ethereum via Infura.
   - Defines an Oracle smart contract to fetch catering-related data.

3. **Google API Setup**:
   - Sets up the Google Places API to search for venues based on location and queries.
   - Configures the Google Sheets API to fetch catering-related data stored in a spreadsheet.

4. **Firebase Setup**:
   - Initializes Firebase Admin SDK using a service account.
   - Connects to Firestore to securely fetch and process dietary requirements.

---

#### **Steps in the Workflow**

##### **Step 1: Search for Venues**
- **Purpose**: Searches for potential conference venues near a specified location using the Google Places API.
- **Process**:
  - Sends a GET request to the Google Places API with query parameters like location and search term.
  - Parses the response to extract venue names and addresses.
  - Prints the list of venues found.

---

##### **Step 2: Fetch Catering Data**
- **Purpose**: Gathers catering quotes from multiple sources (Ethereum Oracle and Google Sheets).
- **Process**:
  - Calls a smart contract on Ethereum via Web3 to fetch on-chain catering data.
  - Reads a specified range of cells from a Google Sheets spreadsheet to gather additional catering details.
  - Aggregates and returns the catering data from both sources.

---

##### **Step 3: Process Dietary Requirements**
- **Purpose**: Handles sensitive user dietary data securely using Firebase Firestore and NEAR blockchain.
- **Process**:
  - Retrieves user dietary requirements from Firestore.
  - Sends dietary data to a NEAR smart contract for secure processing.
  - Retrieves processed data from the NEAR smart contract and prints it.

---

##### **Step 4: Execute NEAR Intents**
- **Purpose**: Manages and executes intents (tasks) on the NEAR blockchain for event planning and catering.
- **Process**:
  - Adds intents (e.g., `blockchain://eventsplanner.web3` and `blockchain://catering.web3`) to a coordinator smart contract on NEAR.
  - Executes all added intents via the smart contract.

---

### Implementation in the Agent Domain Protocol (ADP)

To implement this in ADP, the code would be transformed into modular workflow nodes and integrated with ADP's **domain architecture**, **workflow engine**, and **multichain compatibility**.

---

#### **Mapping to ADP Components**

1. **Venue Search (Step 1)**
   - **ADP Integration**: Create an N8N node for the Google Places API search.
   - **Workflow Node**:
     ```json
     {
       "type": "web3-nodes-base.httpRequest",
       "parameters": {
         "url": "https://maps.googleapis.com/maps/api/place/textsearch/json",
         "query": {"location": "37.7749,-122.4194", "query": "conference venues"},
         "headers": {"Authorization": "Bearer YOUR_GOOGLE_API_KEY"}
       },
       "position": [100, 200]
     }
     ```

2. **Catering Data Fetch (Step 2)**
   - **ADP Integration**: Create a workflow node that fetches data from Ethereum Oracles and Google Sheets.
   - **Workflow Node**:
     ```json
     {
       "type": "web3-nodes-base.oracleFetch",
       "parameters": {
         "rpc_url": "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
         "contract_address": "0xYourEthereumOracleAddress",
         "method_name": "get_data"
       },
       "position": [300, 200]
     },
     {
       "type": "web3-nodes-base.sheetsRead",
       "parameters": {
         "spreadsheetId": "YOUR_GOOGLE_SHEET_ID",
         "range": "Sheet1!A1:B10"
       },
       "position": [500, 200]
     }
     ```

3. **Dietary Requirements Processing (Step 3)**
   - **ADP Integration**: Securely fetch data from Firestore and send it to a NEAR-based smart contract.
   - **Workflow Node**:
     ```json
     {
       "type": "web3-nodes-base.firebaseRead",
       "parameters": {
         "collection": "dietary_requirements",
         "documentId": "user_id"
       },
       "position": [700, 200]
     },
     {
       "type": "web3-nodes-base.nearFunctionCall",
       "parameters": {
         "contractId": "<secure_data_processor_contract_id>",
         "methodName": "process_sensitive_data",
         "args": {"data": "{{dietary_data}}"}
       },
       "position": [900, 200]
     }
     ```

4. **Execute Intents (Step 4)**
   - **ADP Integration**: Add and execute intents using NEAR smart contracts.
   - **Workflow Node**:
     ```json
     {
       "type": "web3-nodes-base.nearFunctionCall",
       "parameters": {
         "contractId": "<intent_coordinator_contract_id>",
         "methodName": "add_intent",
         "args": {"intent": "blockchain://eventsplanner.web3"}
       },
       "position": [1100, 200]
     },
     {
       "type": "web3-nodes-base.nearFunctionCall",
       "parameters": {
         "contractId": "<intent_coordinator_contract_id>",
         "methodName": "execute_intents"
       },
       "position": [1300, 200]
     }
     ```

---

#### **Benefits of ADP Implementation**
- **Modular Workflows**: Each step becomes a reusable N8N-compatible workflow node.
- **Multichain Interoperability**: Interactions with NEAR, Ethereum, and Google APIs are handled seamlessly.
- **On-Chain Auditing**: On-chain intent execution and dietary data processing ensure transparency.
- **Simplified Management**: Non-technical users can configure workflows visually using the N8N editor.

---

This modular approach ensures the tasks align with ADP's decentralized architecture and provide extensibility for future use cases.


---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

This project is licensed under the [MIT License](LICENSE).
```
