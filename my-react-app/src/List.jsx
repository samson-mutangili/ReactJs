import PropTypes from 'prop-types'
function List(props){

    const category = props.category;
    const itemLists = props.items;


    // const fruits = [
    //                 {id: 1, name: "Apple", calories: 95}, 
    //                 {id: 2, name: "Orange", calories: 45}, 
    //                 {id: 3, name: "Banana", calories: 30}, 
    //                 {id: 4, name: "Watermelon", calories: 70},
    //             ]

    //sort the strings
   // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sort in alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //sort in reverse alphabetical order

    //fruits.sort((a, b) => a.calories - b.calories); //numeric order or ascending order
    //fruits.sort((a, b) => b.calories - a.calories); //reverse numeric order or descending order


    //fruits that have calories less than 50
    //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 50)

    //fruits that have high calories than 50
    //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 50)

    const listItems = itemLists.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                                            </li>);

    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
}

//set the default props
List.defaultProps = {
    category: "Category",
    items: [],
}

//set the props types
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                            calories: PropTypes.number})),
}

export default List