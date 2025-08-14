// js/chatbot.js

document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (self-contained for chatbot functionality) ---
    const destinationsData = [
        { id: 1, name: "Harishankar Temple", category: "Temple" },
        { id: 2, name: "Hirakud Dam", category: "Historical Site" },
        { id: 3, name: "64 Yoginis Temple", category: "Historical Site" },
        { id: 4, name: "Pradhanpat Waterfalls", category: "Nature" },
        { id: 5, name: "Samaleswari Temple", category: "Temple" },
        { id: 6, name: "Debrigarh Wildlife Sanctuary", category: "Nature" },
    ];
    const staysData = [
        { id: 1, name: "Hotel Paradise", type: "Luxury Hotel" },
        { id: 2, name: "Classic Inn", type: "Budget Hotel" },
        { id: 3, name: "Odisha Homestay", type: "Verified Homestay" },
        { id: 4, name: "The River View", type: "Boutique Hotel" }
    ];

    // --- CHATBOT CONVERSATION TREE ---
    const chatTree = {
        'start': {
            response: "Welcome to Heritage Yatri! I'm Yatri Buddy. How can I help you today?",
            options: ['Destinations', 'Stays', 'Cuisine', 'Emergency Help']
        },
        // Destinations Path
        'Destinations': {
            response: "Great choice! Our region is full of amazing places. What type of destination are you interested in?",
            options: ['Temples', 'Nature Spots', 'Historical Sites', 'Go Back']
        },
        'Temples': {
            response: (data) => `We have beautiful temples like ${data.join(', ')}. You can find more details on the Destinations page!`,
            options: ['Go Back'],
            dataKey: 'destinations',
            filter: 'Temple'
        },
        'Nature Spots': {
            response: (data) => `For nature lovers, I recommend ${data.join(', ')}. Perfect for a peaceful escape!`,
            options: ['Go Back'],
            dataKey: 'destinations',
            filter: 'Nature'
        },
        'Historical Sites': {
            response: (data) => `Explore our rich history at sites like ${data.join(', ')}.`,
            options: ['Go Back'],
            dataKey: 'destinations',
            filter: 'Historical Site'
        },
        // Stays Path
        'Stays': {
            response: "We have verified stays for every budget. What are you looking for?",
            options: ['Luxury Hotels', 'Budget Hotels', 'Homestays', 'Go Back']
        },
        'Luxury Hotels': {
            response: (data) => `For a luxurious stay, I suggest ${data.join(' or ')}. You can find booking details on the Stays page.`,
            options: ['Go Back'],
            dataKey: 'stays',
            filter: 'Luxury Hotel'
        },
        'Budget Hotels': {
            response: (data) => `Traveling on a budget? Check out ${data.join(', ')}. They offer great value!`,
            options: ['Go Back'],
            dataKey: 'stays',
            filter: 'Budget Hotel'
        },
        'Homestays': {
            response: (data) => `For an authentic local experience, try ${data.join(', ')}.`,
            options: ['Go Back'],
            dataKey: 'stays',
            filter: 'Verified Homestay'
        },
        // Other Paths
        'Cuisine': {
            response: "Odisha's cuisine is delicious! Don't miss out on Pakhala Bhata, Dalma, and the famous Chhena Poda dessert. See more on our Cuisine page!",
            options: ['Go Back']
        },
        'Emergency Help': {
            response: "I'm sorry to hear there's an emergency. Please click the red SOS button on the bottom-right of your screen for immediate access to emergency numbers. Stay safe!",
            options: ['Go Back']
        },
        // Utility
        'Go Back': {
            action: 'start' // This will reset the conversation
        }
    };

    // --- CHATBOT ELEMENTS ---
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptionsContainer = document.getElementById('chat-options');

    if (!chatbotBtn || !chatWindow || !chatMessages || !chatOptionsContainer) {
        // If any element is missing, don't run the chatbot logic
        return;
    }

    // --- CORE FUNCTIONS ---

    // Function to add a message to the chat window
    const addMessage = (text, sender) => {
        const bubble = document.createElement('div');
        bubble.textContent = text;
        if (sender === 'user') {
            bubble.className = 'text-sm p-2 bg-blue-500 text-white rounded-lg self-end max-w-xs ml-auto mt-2';
        } else {
            bubble.className = 'text-sm p-2 bg-orange-100 rounded-lg self-start max-w-xs mt-2';
        }
        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    };

    // Function to show a "typing..." indicator
    const showTypingIndicator = () => {
        const typingBubble = document.createElement('div');
        typingBubble.id = 'typing-indicator';
        typingBubble.className = 'text-sm p-2 bg-orange-100 rounded-lg self-start max-w-xs mt-2';
        typingBubble.innerHTML = '<span class="animate-pulse">...</span>';
        chatMessages.appendChild(typingBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    
    // Function to hide the "typing..." indicator
    const hideTypingIndicator = () => {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    };


    // Function to process user input and advance the conversation
    const processUserChoice = (choiceKey) => {
        addMessage(choiceKey, 'user');
        
        const node = chatTree[choiceKey];

        // Handle the 'Go Back' action
        if (node && node.action === 'start') {
            displayNode('start');
            return;
        }

        displayNode(choiceKey);
    };

    // Function to display a conversation node (bot response and options)
    const displayNode = (nodeKey) => {
        const node = chatTree[nodeKey];
        if (!node) return;

        showTypingIndicator();

        setTimeout(() => {
            hideTypingIndicator();

            // Handle dynamic responses
            let responseText = node.response;
            if (typeof responseText === 'function') {
                let data = [];
                if (node.dataKey === 'destinations') {
                    data = destinationsData.filter(d => d.category === node.filter).map(d => d.name);
                } else if (node.dataKey === 'stays') {
                    data = staysData.filter(s => s.type === node.filter).map(s => s.name);
                }
                responseText = responseText(data);
            }
            addMessage(responseText, 'bot');

            // Display new options
            chatOptionsContainer.innerHTML = ''; // Clear old options
            if (node.options) {
                node.options.forEach(optionText => {
                    const optionBtn = document.createElement('button');
                    optionBtn.className = 'chat-option w-full text-left p-2 rounded-lg text-sm hover:bg-gray-100 mb-1';
                    optionBtn.textContent = optionText;
                    optionBtn.onclick = () => processUserChoice(optionText);
                    chatOptionsContainer.appendChild(optionBtn);
                });
            }
        }, 600); // Simulate bot thinking
    };

    // --- EVENT LISTENERS ---
    chatbotBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        chatWindow.classList.toggle('flex');
    });

    // Initialize the chatbot with the starting node
    displayNode('start');
});
