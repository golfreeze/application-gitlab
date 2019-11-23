class MobieNo {

    validate(mobileNo) {
        for (let index in mobileNo) {
          if ((mobileNo[index] >= 'a' && mobileNo[index] <= 'z') || (mobileNo[index] >= 'A' && mobileNo[index] <= 'Z')) {
            return 'mobileNo is incorrect'
          }
        }
    }
    
}

module.exports = MobieNo
