console.log("event-listeners");

const dangPie = [
    {
        name: 'moon pie',
        image: 'https://www.browneyedbaker.com/wp-content/uploads/2011/03/moon-pies-2-550.jpg',
        instructor: 'greg'
    },
    {
        name: 'meat pie',
        image: 'https://www.bhg.com.au/media/1899/pie_20160518_bhg.jpg',
        instructor:'michael'
    },
    {
        name: 'key lime pie',
        image: 'http://www.pinkwhen.com/wp-content/uploads/2013/11/Key-Lime-Pie-via-PinkWhen.com_-600x400.jpg?ac5e65',
        instructor: 'callan'
    },
    {
        name: 'rhubarb pie',
        image: 'http://assets.simplyrecipes.com/wp-content/uploads/2014/06/strawberry-rhubarb-pie-horiz-a-1600.jpg',
        instructor: 'maria'
    },
    {
        name: 'kentucky derby pie',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kentucky_Chocolate_walnut_pie_slice.JPG/1200px-Kentucky_Chocolate_walnut_pie_slice.JPG',
        instructor:'zoe'
    },
    {
        name: 'sweet potato pie',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/SweetPotatoPie.jpg/1200px-SweetPotatoPie.jpg',
        instructor:'zoe'
    }
];

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const pieBuilder = (pieArray) => {
    let domString = ''
    for (let i = 0; i < pieArray.length; i++) {
        const pie = pieArray[i]
        domString += `
        <div class="pie-card">
            <h2>${pie.name}</h2>
            <img src=${pie.image} alt='Image of ${pie.name}' />
        </div>
        `

    }
    printToDOM(domString, 'pie-zone')
  };

const buttonClick = (e) =>{
    //figure out WHO rhis instructoor is for the button we clicked on
    const instructor = e.target.id
    //only get those pies from the list of all the pies
    const selectedPies = []
    for (let i = 0; i < dangPie.length; i++) {
        const pie = dangPie[i]
        if (pie.instructor === instructor) {
            selectedPies.push(pie);
        }
    }
    //pass small list of pies back into the pie builder
    pieBuilder(selectedPies)
}

  document.getElementById('zoe').addEventListener('click', buttonClick)
  document.getElementById('michael').addEventListener('click', buttonClick)
  document.getElementById('greg').addEventListener('click', buttonClick)
  document.getElementById('callan').addEventListener('click', buttonClick)
  document.getElementById('maria').addEventListener('click', buttonClick)

  //pieBuilder(dangPie);
    