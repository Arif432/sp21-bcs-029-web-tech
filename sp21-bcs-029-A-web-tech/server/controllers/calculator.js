const results = [];

const postCalculation = (req, res) => {
    const { operand1, operand2, operation } = req.body;
    let result;
    switch (operation) {
      case 'add':
        result = operand1 + operand2;
        break;
      case 'subtract':
        result = operand1 - operand2;
        break;
      case 'multiply':
        result = operand1 * operand2;
        break;
      case 'divide':
        result = operand1 / operand2;
        break;
      default:
        return res.status(400).json({ error: 'Invalid operation' });
    }

    const calculation = { operand1, operand2, operation, result };
    results.push(calculation);
    const c = res.cookie('calculatorResults', JSON.stringify(results), { maxAge: 900000, httpOnly: true });
    res.status(200).json({ result });
}

const getCalculation = (req, res) => {
    res.status(200).json(results);
}

module.exports = {
    postCalculation,
    getCalculation
}