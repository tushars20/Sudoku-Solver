function calculateLQ() {
    var frequencyOfCommunication = parseFloat(document.getElementById('frequencyOfCommunication').value);
    var durationOfTrust = parseFloat(document.getElementById('durationOfTrust').value);
    var mutualActivitiesParticipation = parseFloat(document.getElementById('mutualActivitiesParticipation').value);
    var conflictResolutionTime = parseFloat(document.getElementById('conflictResolutionTime').value);
    var sharedInterests = parseFloat(document.getElementById('sharedInterests').value);
    var supportActions = parseFloat(document.getElementById('supportActions').value);
    var physicalIntimacyFrequency = parseFloat(document.getElementById('physicalIntimacyFrequency').value);
    var qualityTimeTogether = parseFloat(document.getElementById('qualityTimeTogether').value);
    var individualHappinessScore = parseFloat(document.getElementById('individualHappinessScore').value);
    var empathyLevel = parseFloat(document.getElementById('empathyLevel').value);

    // Example weights (adjust as needed)
    var weights = {
        frequencyOfCommunication: 1,
        durationOfTrust: 1,
        mutualActivitiesParticipation: 1,
        conflictResolutionTime: 1,
        sharedInterests: 1,
        supportActions: 1,
        physicalIntimacyFrequency: 1,
        qualityTimeTogether: 1,
        individualHappinessScore: 1,
        empathyLevel: 1
    };

    var totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);

    var lq = (
        (weights.frequencyOfCommunication * frequencyOfCommunication) +
        (weights.durationOfTrust * durationOfTrust) +
        (weights.mutualActivitiesParticipation * mutualActivitiesParticipation) +
        (weights.conflictResolutionTime * (1 / (conflictResolutionTime + 1))) +
        (weights.sharedInterests * sharedInterests) +
        (weights.supportActions * supportActions) +
        (weights.physicalIntimacyFrequency * physicalIntimacyFrequency) +
        (weights.qualityTimeTogether * qualityTimeTogether) +
        (weights.individualHappinessScore * individualHappinessScore) +
        (weights.empathyLevel * empathyLevel)
    ) / totalWeight;

    document.getElementById('result').innerText = 'Your Love Quotient is: ' + lq.toFixed(2);
}
