const Openpay = require('openpay');
const openpay = new Openpay('msdt55e0qklwxivoh1yx', 'sk_0ac09ba02f3347069ecff76fb16aba51', false);


class payService {

    constructor() {
        const createCustomer = function(name, email) {
            return new Promise((resolve, reject) => {
                const customerRequest = {
                    name: name,
                    email: email,
                    requires_account: false
                }
            
                openpay.customers.create(customerRequest, (err, body) => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve(body)
                })
            })
        }

        this.applyCharge = function(user, tokenCard, amount) {
            return new Promise((resolve, reject) => {
                const idUnique = new Date().getTime()
                createCustomer(user.name, user.email)
                    .then(customer => {
                        const chargeRequest = {
                            source_id: tokenCard, //Token que genera el front
                            method: 'card',
                            amount: amount,
                            currency: 'MXN',
                            description: 'reactflix payment',
                            order_id: idUnique, // Tiene que ser un id unico
                            device_session_id: idUnique // Tiene que ser una sesión unica
                        }
                
                        openpay.customers.charges.create(customer.id, chargeRequest, (err, charge) => {
                            if(err) {
                                console.log(err)
                                return reject(err)
                            }
                            return resolve(charge)
                        })

                    })
                    .catch(err => {
                        return reject(err)
                    })
            })
        }
    }
}

module.exports = payService;