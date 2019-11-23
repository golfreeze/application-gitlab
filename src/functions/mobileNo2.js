class MobieNo {

    validate(mobileNo) {
        for (let i = 0; i < mobileNo.length; i++) {
          if ((mobileNo[i] >= 'a' && mobileNo[i] <= 'z') || (mobileNo[i] >= 'A' && mobileNo[i] <= 'Z')) {
            return 'mobileNo is incorrect'
          }
        }
    }
    
}

module.exports = MobieNo
