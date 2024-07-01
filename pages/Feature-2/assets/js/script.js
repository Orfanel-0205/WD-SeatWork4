const angle1 = document.getElementById('angle1');
        const angle2 = document.getElementById('angle2');
        const angle3 = document.getElementById('angle3');
        
        const bullet1 = document.getElementById('bullet1');
        const bullet2 = document.getElementById('bullet2');
        
        angle1.addEventListener('mouseover', () => showDescription('angle1'));
        angle2.addEventListener('mouseover', () => showDescription('angle2'));
        angle3.addEventListener('mouseover', () => showDescription('angle3'));
        
        bullet1.addEventListener('mouseover', () => showDescription('bullet1'));
        bullet2.addEventListener('mouseover', () => showDescription('bullet2'));
        
        function showDescription(id) {
            const allContainers = document.querySelectorAll('.angle-container, .bullet-container');
            allContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            const activeContainer = document.getElementById(id);
            activeContainer.classList.add('active');
        }