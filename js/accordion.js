(function(){
    window.accordion = {
        handleClick: (event) => {
            console.log(event);
            // event.preventDefault();
            const item = event.target;

        },
        init: () => {
            const self = this;
            this.listElement = document.querySelector('#accordion > ul');
            console.log(this.listElement);
            let listItems = [];
            for (let i = 0, t = this.listElement.children.length; i<t; i++) {
                listItems.push(this.listElement.children[i]);
            }
            listItems.forEach((i) => {
                // i.addEventListener('click', self.handleClick);
                i.addEventListener('click', (event) => {
                    event.preventDefault();
                    if (i.classList.contains('open')) {
                        i.classList.remove('open');
                    } else {
                        this.listItems.forEach((item) => {
                            item.classList.remove('open');
                        });
                        console.log('want to open', i);
                        i.classList.add('open');
                    }
                });
            });
            this.listItems = listItems;
        }
    };
})();