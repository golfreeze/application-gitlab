import chai from 'chai'
import MobileNo from '../functions/mobileNo'
const expect = chai.expect

describe('Check MobileNo', function () {

  //test case null
  it('fail when mobileNo = null, expect return mobileNo is incorrect', function () {
    let mobileNo = null
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })
  //test case space
  it('fail when mobileNo = \"\", expect return mobileNo is incorrect', function () {
    let mobileNo = ""
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })
  //test case charector
  it('fail when mobileNo = 0123456Abc, expect return mobileNo is incorrect', function () {
    let mobileNo = "0123456Abc"
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })
  //test case special character
  it('fail when mobileNo = 0123456#&@, expect return mobileNo is incorrect', function () {
    let mobileNo = '0123456#&@'
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })
  //test case length ≠ 10
  it('fail when mobileNo = 012345678, expect return mobileNo is incorrect', function () {
    let mobileNo = '012345678'
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })

//test case mobileNo[0] ≠ 0
  it('fail when mobileNo = 9123456789, expect return mobileNo is incorrect', function () {
    let mobileNo = '9123456789'
    let result = new MobileNo().validate(mobileNo)
    expect(result).to.equal('mobileNo is incorrect')
  })

  //test case success
  it('success when mobileNo = 0812345678, expect return success', function () {
    let mobileNo = '0812345678'
    let mobiemobileNo = new MobileNo().validate(mobileNo)
    expect(mobiemobileNo).to.equal('success')
  })

})
