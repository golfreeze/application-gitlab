import chai from 'chai'
import MobileNo from '../functions/mobileNo'
const expect = chai.expect

describe('Check MobileNo', function () {

    //test case charector
    it('fail when mobileNo = 0123456Abc, expect return mobileNo is incorrect', function () {
        // arrange
        let mobileNo = "0123456Abc"
        // act
        let result = new MobileNo().validate(mobileNo)
        // assert
        expect(result).to.equal('mobileNo is incorrect')
      })
    
})
