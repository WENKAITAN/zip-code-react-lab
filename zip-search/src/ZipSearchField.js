import React from 'react';

class ZipSearchField extends React.Component {

    handleInput = (value) => {
        console.log(value)
        if(value.length > 4){
            fetch(`http://ctp-zip-api.herokuapp.com/zip/${value}`)
            .then(response => response.json())
            .then(cities => {
                console.log(JSON.stringify(cities))
                this.props.saveCities(cities)
            })
        }else{
            this.props.saveCities([])
        }


    }
    render(){
        return(
            <form className="zip-search-field">
                <label>
                    Zip Code: 
                    <input 
                        type="text" 
                        onChange={(event) => this.handleInput(event.target.value)}
                        placeholder="Try 10029"
                    />
                </label>
            </form>
        )
    }
}

export default ZipSearchField;