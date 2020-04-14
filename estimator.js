const covid19ImpactEstimator = (data) => outputImpactEstimator;

var outputImpactEstimator = {
    data: {
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614

    },
    impact: {
        currentlyInfected:function(){
            return reportedCases*10
        },
        infectionsByRequestedTime: function() {
            let periodicInterval = 0;
            switch (period) {
                case 'days':
                    periodicInterval = Math.floor(timeElapse / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                    
        
                case 'months':
                    periodicInterval = Math.floor((timeElapse * 30) / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                    
        
                case 'weeks':
                    periodicInterval = Math.floor((timeElapse * 7) / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                
                default:
                    periodicInterval = Math.floor(timeElapse / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
            }
            
        },

        severeCasesByRequestedTime: function(){
            return Math.floor(0.15*this.infectionsByRequestedTime)
        },
        hospitalBedsByRequestedTime: function () {
            severePercentage = 0.15 * this.infectionsByRequestedTime;
            numberOfAvailableBeds = 0.35 * hospitalBeds;
            return Math.floor(numberOfAvailableBeds - severePercentage);
        },
        casesForICUByRequestedTime: function(){
            return Math.floor(0.05*this.infectionsByRequestedTime);
        },
        casesForVentilatorsByRequestedTime:function(){
            return Math.floor(0.02*this.infectionsByRequestedTime);
        }
    },


    severeImpact: {
        currentlyInfected: function(){
            return reportedCases*50
        },

        infectionsByRequestedTime: function() {
            let periodicInterval = 0;
            switch (period) {
                case 'days':
                    periodicInterval = Math.floor(timeElapse / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                    
        
                case 'months':
                    periodicInterval = Math.floor((timeElapse * 30) / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                    
        
                case 'weeks':
                    periodicInterval = Math.floor((timeElapse * 7) / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
                
                default:
                    periodicInterval = Math.floor(timeElapse / 3);
                    return this.CurrentlyInfected * 2 ** periodicInterval;
            }
            
        },

        severeCasesByRequestedTime: function(){
            return Math.floor(0.15*this.infectionsByRequestedTime)
        },
        hospitalBedsByRequestedTime: function () {
            severePercentage = 0.15 * this.infectionsByRequestedTime;
            numberOfAvailableBeds = 0.35 * hospitalBeds;
            return Math.floor(numberOfAvailableBeds - severePercentage);
        },
        casesForICUByRequestedTime: function(){
            return Math.floor(0.05*this.infectionsByRequestedTime);
        },
        casesForVentilatorsByRequestedTime:function(){
            return Math.floor(0.02*this.infectionsByRequestedTime);
        },
        dollarsInFlight:function() {
            switch (period) {
                case 'days':
                    return Math.floor((this.infectionsByRequestedTime * population * dailyIncome) / timeElapse);
        
                case 'months':
                    return Math.floor
                        (this.infectionsByRequestedTime * population * dailyIncome) / (timeElapse * 30);
        
                case 'weeks':
                    return Math.floor(
                        (this.infectionsByRequestedTime * population * dailyIncome) / (timeElapse * 30)
                    );
            }
        }
        
    }
};


var reportedCases = outputImpactEstimator.data.reportedCases;

var severeCurrentlyInfected = outputImpactEstimator.data.reportedCases * 50;
outputImpactEstimator.severeImpact.currentlyInfected = severeCurrentlyInfected;

var timeElapse = outputImpactEstimator.data.timeToElapse;

var period = outputImpactEstimator.data.periodType;

var hospitalBeds = outputImpactEstimator.data.totalHospitalBeds;
var population = outputImpactEstimator.data.population;
var dailyIncome = outputImpactEstimator.data.region.avgDailyIncomeInUSD;
function impactCurrentlyInfected() {
    let periodicInterval = 0;
    let mildImpact = 0;
    
    switch (period) {
        case 'days':
            periodicInterval = Math.floor(timeElapse / 3);
            mildImpact = currentlyInfected * 2 ** periodicInterval;

            break;

        case 'months':
            periodicInterval = Math.floor((timeElapse * 30) / 3);
            mildImpact = currentlyInfected * 2 ** periodicInterval;

            break;

        case 'weeks':
            periodicInterval = Math.floor((timeElapse * 7) / 3);
            mildImpact = currentlyInfected * 2 ** periodicInterval;

            break;
    }
    return mildImpact;
}

function severeCurrentlyInfected() {
    let periodicInterval = 0;
    
    let severeImpact = 0;
    switch (period) {
        case 'days':
            periodicInterval = Math.floor(timeElapse / 3);
            severeImpact = severeCurrentlyInfected * 2 ** periodicInterval;
            break;

        case 'months':
            periodicInterval = Math.floor((timeElapse * 30) / 3);
            severeImpact = severeCurrentlyInfected * 2 ** periodicInterval;
            break;

        case 'weeks':
            periodicInterval = Math.floor((timeElapse * 7) / 3);
            severeImpact = severeCurrentlyInfected * 2 ** periodicInterval;
            break;
    }
    return severeImpact;
}

infectionsByRequestedTime =
    outputImpactEstimator.severeImpact.infectionsByRequestedTime;

function numberOfSevereCasesByrequestedTime(infections) {
    severePercentage = 0.15 * infections;
    numberOfAvailableBeds = 0.35 * hospitalBeds;
    return numberOfAvailableBeds - severePercentage;
}


export default covid19ImpactEstimator;