const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching V1

router.post('/v1/address-to-write-to', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v1/address-to-write-to')
    } else {
      res.redirect('/v1/confirmation')
    }
  })


router.post('/v1/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v1/address')
    } else {
      res.redirect('/v1/if-appointee')
    }
  })

// Branching V2 
router.post('/v2/address-to-write-to', function (req, res) {
  
  let differentAddress = req.session.data['different-address']

  if (differentAddress === 'yes') {
    res.redirect('/v2/address-to-write-to')
  } else {
    res.redirect('/v2/confirmation')``
  }
})

router.post('/v2/if-appointee', function (req, res) {

  let differentAddress = req.session.data['if-loan-for-you']

  if (differentAddress === 'yes') {
    res.redirect('/v2/address')
  } else {
    res.redirect('/v2/if-appointee')
  }
})

// Branching V4


router.post('/v4/address-to-write-to', function (req, res) {
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v4/address-to-write-to')
    } else {
      res.redirect('/v4/check-your-answers')
    }
  })


router.post('/v4/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v4/address')
    } else {
      res.redirect('/v4/if-appointee')
    }
  })

// Branching V5

router.post('/v5/address-to-write-to', function (req, res) {
  
    let differentAddress = req.session.data['different-address']
  
    if (differentAddress === 'yes') {
      res.redirect('/v5/address-to-write-to')
    } else {
      res.redirect('/v5/check-your-answers')
    }
  })


router.post('/v5/if-appointee', function (req, res) {
  
    let differentAddress = req.session.data['if-loan-for-you']
  
    if (differentAddress === 'yes') {
      res.redirect('/v5/address')
    } else {
      res.redirect('/v5/if-appointee')
    }
  })




// Branching current as is journey

router.post('/as-is/eligibility-uc', function (req, res) {

  let socialfundDebt = req.session.data['socialfund-debt']

  if (socialfundDebt === 'yes') {
    res.redirect('/as-is/exit-sf-debt')
  } else {
    res.redirect('/as-is/eligibility-uc')
  }
})

router.post('/as-is/eligibility-benefits', function (req, res) {

  let claimUC = req.session.data['claim-uc']

  if (claimUC === 'yes') {
    res.redirect('/as-is/exit-uc')
  } else {
    res.redirect('/as-is/eligibility-benefits')
  }
})

router.post('/as-is/eligibility-esa-duration', function (req, res) {

  let benefitRecieved = req.session.data['benefit-received']

  if (benefitRecieved === 'esa') {
    res.redirect('/as-is/eligibility-esa-duration')
  }
  if (benefitRecieved === 'jsa') {
    res.redirect('/as-is/eligibility-jsa-duration')
  } 
  if (benefitRecieved === 'is') {
    res.redirect('/as-is/eligibility-is-duration')
  }
  if (benefitRecieved === 'pc') {
    res.redirect('/as-is/eligibility-pc-duration')
  }else {
    res.redirect('/as-is/exit-benefits')
  }
})

router.post('/as-is/eligibility-esa-type', function (req, res) {

  let esaDuration = req.session.data['esa-duration']

  if (esaDuration === 'more-than-6months') {
    res.redirect('/as-is/eligibility-esa-type')
  } else {
    res.redirect('/as-is/eligibility-esa-partner')
  }
})

router.post('/as-is/eligibility-jsa-type', function (req, res) {

  let jsaDuration = req.session.data['jsa-duration']

  if (jsaDuration === 'more-than-12-months') {
    res.redirect('/as-is/eligibility-100')
  }
  if (jsaDuration === '6-to-12-months') {
    res.redirect('/as-is/eligibility-jsa-type')
  } else {
    res.redirect('/as-is/eligibility-jsa-partner')
  }
})

router.post('/as-is/eligibility-is-partner', function (req, res) {

  let isDuration = req.session.data['is-duration']

  if (isDuration === 'more-than-6months') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-is-partner')
  }
})

router.post('/as-is/eligibility-pc-partner', function (req, res) {

  let pcDuration = req.session.data['pc-duration']

  if (pcDuration === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-pc-partner')
  }
})

router.post('/as-is/eligibility-esa-previous', function (req, res) {

  let esaPartner = req.session.data['esa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-esa-previous')
  }
})

router.post('/as-is/eligibility-jsa-previous', function (req, res) {

  let esaPartner = req.session.data['jsa-partner']

  if (esaPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-jsa-previous')
  }
})

router.post('/as-is/eligibility-is-previous', function (req, res) {

  let isPartner = req.session.data['is-partner']

  if (isPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-is-previous')
  }
})

router.post('/as-is/eligibility-pc-previous', function (req, res) {

  let pcPartner = req.session.data['pc-partner']

  if (pcPartner === 'yes') {
    res.redirect('/as-is/eligibility-100')
  } else {
    res.redirect('/as-is/eligibility-pc-previous')
  }
})

router.post('/as-is/eligibility-100', function (req, res) {

  let esaPrevious = req.session.data['esa-previous']
  let jsaPrevious = req.session.data['jsa-previous']
  let isPrevious = req.session.data['is-previous']
  let pcPrevious = req.session.data['pc-previous']
  let esaType = req.session.data['esa-type']
  let jsaType = req.session.data['jsa-type']

  if (esaPrevious === 'esa-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }
  
  if (jsaPrevious === 'jsa-no') {
    res.redirect('/as-is/exit-benefits-duration')
  } 

  if (isPrevious === 'is-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }
  
  if (pcPrevious === 'pc-no') {
    res.redirect('/as-is/exit-benefits-duration')
  }

  if (esaType === 'esa-contribution') {
    res.redirect('/as-is/exit-eligibility-esa-contrib')
  } 

  if (jsaType === 'jsa-contribution') {
    res.redirect('/as-is/exit-eligibility-jsa-contrib')
  } else {
    res.redirect('/as-is/eligibility-100')
  }
})

router.post('/as-is/eligibility-industrial-action', function (req, res) {

  let oneHundred = req.session.data['100-or-more']

  if (oneHundred === '100-yes') {
    res.redirect('/as-is/eligibility-industrial-action')
  } else {
    res.redirect('/as-is/exit-100')
  }
})

router.post('/as-is/partner', function (req, res) {

  let industrialAction = req.session.data['industrial-action']

  if (industrialAction === 'ia-yes') {
    res.redirect('/as-is/exit-industrial-action')
  } else {
    res.redirect('/as-is/partner')
  }
})

router.post('/as-is/children', function (req, res) {

  let hasPartner = req.session.data['partner']

  if (hasPartner === 'partner-yes') {
    res.redirect('/as-is/partner-details')
  } else {
    res.redirect('/as-is/children')
  }
})




module.exports = router
