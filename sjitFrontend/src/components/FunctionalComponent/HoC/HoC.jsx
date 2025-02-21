import Button from "./Button"
import trackingMyComp from "./trackingMyComp";

const HoC = () =>{
    const ButtonTrack = trackingMyComp(Button)
    return(
        <div>
            <h1>Welcome to Higher Order Components(HoC)</h1>
            <Button value={"Login"} /> <br />
            <ButtonTrack value = {"Login"} trackingInfo={{"CustID":"Hello","password":"password"}}/>
        </div>
    )
}
export default HoC;