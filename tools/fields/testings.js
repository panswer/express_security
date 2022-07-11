const axios = require('axios').default;

async function request1() {
    try {
        let response = await axios.post('http://localhost:3050/door/console', {
            name: (() => {
                console.log('hola');
                return 'ricardo';
            })()
        });

        // console.log(response);
    } catch (err) {
        console.log(err);
    }
}

request1();