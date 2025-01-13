import React from "react";
import Footer from "../Components/Footer/Footer";
import i1 from "./instructions.jpeg";
import "./Instructions.css";

const Instructions = () => {
  return (
    <div>

      <div className="image-container" id="instructions-img-container">
        <img src={i1} alt="about" className="about-image" />
      </div>
      {/*
      <div className="inst-body">
        <h2 id="inst-headingone" className="inst-heading2">
          Important Rules
        </h2>
        <div className="textbody">
          <br></br>▪ All teams should report 30 minutes before the scheduled
          time at the respective venues for the fixtures. The team will be
          forced to forfeit their matches if they reach the respective venue 15
          minutes after their scheduled match.<br></br> ▪ Misconduct on and off
          the field at any point during the event will result in
          disqualification from the tournament.
          <br></br>▪ Matches will be delayed if necessary due to unforeseen
          circumstances. <br></br>▪ For the Inauguration Ceremony, sports
          uniform & Flags of respective colleges are necessary and it is
          compulsory for all the participants to participate in the March Past.{" "}
          <br></br>▪ Every participant must present the previous year's mark
          sheet when demanded by the respective event head and on the
          registration desk.<br></br> ▪ The teams will be required to submit a
          Unique ID (ERP) of their respective college for each player in print
          or digital format prior to the onset of the event. <br></br>▪ Any
          participant with the backlog in any final year paper will not be
          allowed to participate.<br></br> ▪ Minimum Four teams from Four
          different colleges are required for the conduction of an event.
          <br></br> ▪ All matches will be played according to the Federation
          rules of respected games. <br></br>▪ In case of a protest, submit Rs.
          5000/- as a protest fee and a protest application before or within one
          hour after the match. <br></br>▪ Entries from any post-graduate
          study/degree will not be accepted.<br></br> ▪ Age limit is 25.
          <br></br> ▪ Registration for an event from your college must be done
          at one time. For an event, only one team from each college can
          register. Multiple entries from one college will not be accepted.{" "}
          <br></br>▪ Once the team list is submitted at the time of
          registration, no changes will be allowed.<br></br> ▪ The decision of
          the referees/umpires will be final and in any case of dispute, the
          captain should contact the event in charge of the organizers.{" "}
          <br></br>▪ Any changes in the schedule or timing of the match will be
          at the discretion of the organizers.<br></br> ▪ We will provide First
          Aid Kits and Ambulance. Our university and event will not be
          responsible for any injuries or mishaps during the event.
          <br></br>▪ The organizing committee reserves the right to make any
          changes
        </div>
      </div>
      <div className="inst-body">
        <h2 className="inst-heading2">Common Rules</h2>
        <div className="textbody">
          ▪ There are no gender restrictions for the team.<br></br> ▪ All
          participants must have Discord installed on their devices and ensure
          that the camera and microphone are working. <br></br>▪ Rulebooks with
          detailed guidelines will be provided to participating teams.<br></br>{" "}
          ▪ The E-Sports committee bears all the rights and can take necessary
          steps for investigation if required.<br></br> ▪ Non-compliance may
          result in disqualification of the team.<br></br> ▪ Format and dates of
          the events are subject to number of participants and will be conveyed
          prior to the event.<br></br> ▪ All other MIT-WPU SUMMIT general rules
          are applicable.
        </div>
      </div>*/}

      <Footer />
    </div>
  );
};

export default Instructions;