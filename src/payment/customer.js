const Openpay = require('openpay');
const openpay = new Openpay('msdt55e0qklwxivoh1yx', 'sk_0ac09ba02f3347069ecff76fb16aba51', false);

export const createCustomer = function(name, email) {
    return new Promise((resolve, reject) => {
        const customerRequest = {
            name: name,
            email: email,
            requires_account: false
        }
    
        openpay.customers.create(customerRequest, (err, body) => {
            if(err) {
                console.log('error: ', err)
                return reject(err);
            }
            console.log('success: ', body)
            return resolve(body)
        })
    })
}