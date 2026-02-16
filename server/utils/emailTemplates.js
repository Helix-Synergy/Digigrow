const ownerTemplate = (data, formName = 'Submission') => {
    let html = `
        <h3>New ${formName} Submission</h3>
        <ul>
    `;
    for (const key in data) {
        html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
    }
    html += `</ul>`;
    return html;
};

const confirmationTemplate = (name, formName = 'Submission') => {
    return `
        <h3>Thank You, ${name}!</h3>
        <p>We have received your ${formName} submission. Our team will contact you shortly.</p>
        <p>Best Regards,<br>The Digigrow Team</p>
    `;
};

module.exports = { ownerTemplate, confirmationTemplate };
