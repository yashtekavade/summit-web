// Import necessary modules and initialize DAO
import summitDAO from "../dao/summitDAO.js";
const dao = new summitDAO(); // Create a new instance of the LuxuriantDAO class



export default class summitController {

  static async apiRegister(req, res) {
    try{
      const collegeType = req.body.collegeType;
      const collegeName = req.body.collegeName;
      const collegeCity = req.body.collegeCity;
      const collegeState = req.body.collegeState;
      const Accomodation = req.body.Accomodation;
      const sportsHead = req.body.sportsHead;
      const sportsSelection = req.body.sportsSelection;
      const captainName = req.body.captainName;
      const players = req.body.players;

      const register = await dao.register(collegeType,collegeName,collegeCity,collegeState,Accomodation,sportsHead,sportsSelection,captainName,players);
      if (register.status == "success"){
        res.json({message: "success"});
      }else{
        res.json({message: "failure"});
      }
    }catch(e){
      res.status(500).json({ error: e.message });
    }


  }

 
}