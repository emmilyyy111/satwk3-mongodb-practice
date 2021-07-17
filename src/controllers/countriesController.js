const Country = require('../models/countriesModel')

exports.createCountry = (req, res) => {
    new Country(req.body)
    .save()
    .then(() => res.status(200).send('Created Country'))
    .catch(err => console.log(err))
}

exports.updateCountry = (req, res) => {
    Country
    .findOneAndUpdate({ name: req.params.name }, {$set: req.body})
    .then(() => res.status(200).send('Country updated'))
    .catch(err => console.log(err))
}

exports.deleteCountry = (req, res) => {
    Country
    .findOneAndDelete({ name: req.params.name })
    .then(() => res.status(200).send('Country deleted'))
    .catch(err => console.log(err))
}

exports.getOneCountry = (req, res) => {
    Country
    .findOne({capital: req.params.capital})
    .then(country => res.send(country))
    .catch(err => console.log(err))
}