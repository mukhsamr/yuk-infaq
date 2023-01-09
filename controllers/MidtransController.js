const midtransClient = require('midtrans-client');

module.exports = class MidtransControllers {

    // Get token
    static async token(req, res) {

        const snap = new midtransClient.Snap({
            isProduction: true,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
        });

        try {
            const pay = await snap.createTransaction(req.body)
            res.status(200).json(pay.token)

        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

}