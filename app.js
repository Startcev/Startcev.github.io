'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoad: true, isSuccess: false};
    }

    componentDidMount() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    data: {},
                    query: {
                        request_token: {
                            method: "token/create",
                            params: {
                                pushToken: "",
                                clientId: "vk0.1",
                                clientSecret: "XN3o6pSxYiSKvB11UF5*W7NZ4x|0JE",
                                deviceId: "test",
                                deviceName: "brouser",
                                platform: "testReact",
                                platformVersion: "10"
                            }
                        }
                    }
                }
            )
        };

        fetch('https://str.st/webapi/', requestOptions)
            .then(res => res.json())
            .then(result => {
                this.setState({isLoad: false, isSuccess: true});
                console.log('Все нормалньо :+1:');
                }
            )
            .catch(error => {
                this.setState({isLoad: false, isSuccess: false});
                console.log("Произошла ошибка: " + error)
            })
    }

    render() {

        if (this.state.isLoad) {
            return 'Загрузка...'
        }

        if (this.state.isSuccess) {
            return 'Удачно'
        } else {
            return 'Произошла ошибка!'
        }
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);