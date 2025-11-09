function msg() {
            const messageContainer = document.getElementById('message-container');
            messageContainer.style.display = 'block';
            messageContainer.innerHTML = '';  

            
            for (let i = 0; i < 100; i++) { 
                let paragraph = document.createElement('p');
                paragraph.innerText = "Sir, please extend the project submission deadline.";
                messageContainer.appendChild(paragraph);
            }
        }