import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const EducationAndExperience = () => {
  const [activeButton, setActiveButton] = useState("Professional Experiences");
  const [open, setOpen] = useState(false);
  const [selectedData , setSelectedData] = useState(null);
  const Dialog = ({data,handleClose,open})=>{
    return (
      <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle sx={{ m: 0, p: 2 ,display:"flex", alignItems:"center",gap:"10px"}} id="customized-dialog-title">
                  <img alt="logo" className="h-[40px]" src={data.logo}/> {data.dialogTitle}
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    {data.dialogContentOne}
                  </Typography>
                  <Typography gutterBottom>
                    {data.dialogContentTwo}
                  </Typography>
                  <Typography gutterBottom>
                    {data.dialogContentThree}
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button disabled={data.websiteLink?false:true} autoFocus onClick={()=>navigateToWebsite(data.websiteLink)}>
                    {data.buttonText}
                  </Button>
                </DialogActions>
              </BootstrapDialog>
    )
  }
  const handleClickOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigateToWebsite = (url) => {
    window.open(url, "_blank");
    setOpen(false);
  }
  const handleButton = (e) => {
    if (e.target.innerText === "Professional Experiences") {
      setActiveButton("Professional Experiences");
    } else {
      setActiveButton("Education");
    }
  };

  const cards =
    activeButton === "Professional Experiences"
      ? [
        {
          dialogTitle : "Osmosys Software Solutions Pvt Ltd",
          dialogContentOne :"Heeddata is an impact-oriented multi-cloud management platform that dashboards a visibility into your cloud costs, utilizations, and performances. It integrates with all major CSPs (Oracle Cloud Infrastructure, AWS, Google Cloud, and Microsoft Azure) and their various cloud regions. It is built on the FinOps framework to provide granular cost visibility with AI/ML optimization engine for continuous improvement.",
          dialogContentTwo:"The platform helps enterprises' leaderships to track and extract measurable outcomes across FinOps in order to decrease cloud costs and increase operational efficiencies by governing operations, security, cost, access, and resources.",
          dialogContentThree:"Heeddata is useful for cloud-using enterprises of all sizes, operating in any industry including financial services, healthcare, retail, transportation, manufacturing, EdTech, telecommunications, and public sector.",
          websiteLink:"https://osmosys.co/",
          title: "Osmosys Software Solutions Pvt Ltd",
          subTitle: "Software Engineer Intern",
          yoE: "6 Months",
          timeScale: "March 2021 - August 2021",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpOCNomQ13LD3PhoNdRns0DcpwCE4nFb66kUP2NJcnQ&s",
          buttonText:"Visit Osmosys Website"
        },
          
        ]
      : [
        {
          dialogTitle:"Pragati Engineering College",
          dialogContentOne:"PRAGATI ENGINEERING COLLEGE focuses on imparting skills on cutting – edge technologies and shaping the students into disciplined young citizens of good character and lays emphasis on practical experience so as to enable them to secure employment in industry thereby to become entrepreneurs.  The courses are so structured which leads to a linear growth and progressive insight into  the engineering subjects as well as training in soft skills. Since inception in 2001.",
          dialogContentTwo:"",
          dialogContentThree:"",
          websiteLink:"https://pragati.ac.in/",
          title: "Pragati Engg College",
          subTitle: "CSE",
          yoE: "4 Years",
          timeScale: "2019-2023",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGLIyrriPw7F44jf17Sr9f5Wx5JqREzUWOt8nmVVV0Q&s",
          buttonText:"Visit College Website"
        },
        {
          dialogTitle:"Sri Chaitanya Junior College",
          dialogContentOne:"The growth of SCGI since then has been tremendous. After we established a boys’ junior college in Hyderabad in 1991, we quickly launched several junior colleges (classes XI-XII) in other towns of then unified Andhra Pradesh. Currently, there are 321 state board-affiliated junior colleges and 322 K-10 Sri Chaitanya Techno Schools in Andhra Pradesh and Telangana. In addition, we have established 107 CBSE-affiliated Chaitanya schools in other states of India. This is very satisfactory progress.",
          dialogContentTwo:"",
          dialogContentThree:"",
          websiteLink:"https://srichaitanya.net/",
          title: "Sri Chaitanya College",
          subTitle: "MPC",
          yoE: "2 Years",
          timeScale: "2017 - 2019",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIkeM5VaVm_twLTRIFGyKSkep_f1KC3SV25zcu2OCmw&s",
          buttonText:"Visit College Website"
        },
        {
          dialogTitle:"Dr. KKR's Gowtham Concept School",
          dialogContentOne:"An outgoing student of Gowtham should carry with him the profound knowledge of the fundamentals of the subject that will enable him get a brilliant rank in the competitive exams like IIT, AIEEE, BITSAT, EAMCET, JIPMER etc.' Before choosing a school for a kid, the parents have to ask the school management only one question point blank as to.",
          dialogContentTwo:"",
          dialogContentThree:"",
          websiteLink:"http://kkrgowtham.com/?page_id=11",
          title: "Dr. KKR's Gowtham Concept School",
          subTitle: "SSC",
          yoE: "1 Year ",
          timeScale: "2016 - 2017",
          logo: "https://schoolview.in/images/listings/39111images-(11)-(10)(2).jpeg",
          buttonText:"Visit School Website"
        },
        ];
  const skills = [
    {
      logo: "data:image/png;base64,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",
      name: "JavaScript",
      percentage: 90,
    },
    {
      logo: "data:image/png;base64,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",
      name: "React",
      percentage: 90,
    },
    {
      logo: "data:image/png;base64,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",
      name: "Python",
      percentage: 90,
    },
    {
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABE1JREFUeF7tmVuozVkcxz+HIZR7CcnwgBhymwxibgwSRZmSS5R4EJFcBonEkGkmDzzwIhqk5B5yyS2GcpmHUaTccwllRhNzNes7Z+3aztnn7LX+l23v9vq97If9W7/1+33X7/6voMyposztJwAQPKDMEQghUOYOEJJgCIEQAmWOQAiBMneAUAVCCIQQKBwCHYBJwACgD9AUaAj8A/wK3Ad+AU4Ch4DnhVCtECHQCVgHjAbqOhr1B7AbWAXccDwTiS1tAOYAa+xLR1Hwb2ADsAR4HUVAvjNpASC5PwBz8yng+L9CQx5015HfmS0tANaaF1vkrIUb42Pgy6RDIg0AvgKOAnXc7PLiugcMBB55napkbgMIxHcoaQDqAbeAD+0tctmzwB1A8dwRGAa0i2BA5sh14DPghYeMTwBVoV1pAzAZ2AZcsonrFPC2yqUCaQKgMGntYUQ2601gjGM4CKw9QC/gQdoA/AScAZba+l6bfc2A7cDIiCCoKqjCrAde5ZDRyj7CLNtXCLBqlGQINAEWGMOXeRikPLHVNkgex95h/c287j4ben8ZQATsx8Dnpo/4wHqg8sbFtAEQ4opLdXY+JCX3AqN8DnnwbjRdpbwgJyXpAR46VWNtBBwBPo0jJMfZa7ZqvCl2AKRfA1M9tpjENj4hEK7ailNrtSgWD8i2eSrwPdAiBhA7gZmmE32ZT0YxAiCdlcjmA9MB5RZX+tkkveVm2jzgeqBYAcjoXx8YCgwHepuyqckyM0Yrrn+3vYD6DlWCc66GZ/iiAvCFbUT6AZ2tUhp1pZTcTt2gYvAYcMLU4z99FSsUvy8A44xiK4CPPBR8Cmy2ca3FR1GRKwDNrRECICopG8+zrXJUGYmfcwFASUiu3DOh29X+TgO09XnvlA8ANShKMN0T1vS0nQFS2fL46JoPgE1m9p7hI9CDV4vPsXZM9jj2f3/fElBuiU21ATAoq6xoyNC2Vpk9k8i6WQM0BEWlH82uYArwr4cAjdGra5gAPcRUstYGwEEzQY2w46a2us9ySG8MaPG52Gx+FS5R6LApmxMduja9vIzvb0qrHicRqgkAbXQu21p/3uGmLqZR2Q/oNwo9MT3EN6an2GF2CfK2bJKOWrN9C/S1YIkvEaoJAA0kamaueNyiuNQyxKdHqCr+IXAc0K+6wPYm9AZnrdBuW5C1XkuEagIg5wLR4ca2ZgK7kLUTdDjizKI8McQsOlRBEqN8VSDKRV1twhSISdJKO+gkKTO1z+PKIUqiPRLS9jtgYUKyqiWYNORKphYcKlezza82wVFI056Soz6PpUJphEBVRVUZtCX+2oLiYoiSnPaEMl6JLzUqBAAZ5VUltALXfK9KoQ8VaqLkHVpra7urRkurdTVI1Xb4aaBQSADS0D+2zABAbAhLXEDwgBJ/wNjqBw+IDWGJCwgeUOIPGFv94AGxISxxAcEDSvwBY6sfPCA2hCUuoOw94D9pdJ5Bz/yaAQAAAABJRU5ErkJggg==",
      name: "TailWind CSS",
      percentage: 90,
    },
    {
      logo: "data:image/png;base64,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",
      name: "Node JS",
      percentage: 70,
    },
    {
      logo: "data:image/png;base64,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",
      name: "CSS",
      percentage: 80,
    },
  ];
  return (
    <div className="flex pt-[100px] w-full bg-[#FFF3EA] iPhoneSE:flex-col laptop:flex-row">
      <div className="pr-[5%] w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[10px] laptop:w-1/2 text-left pl-[5%]">
        <h1 className="text-5xl font-semibold">Education & Experience</h1>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {skills.map((skill) => (
            <div key={skill.logo} className="flex flex-col items-center  h-[150px] w-[180px]">
              <div className="h-[90px] w-[90px] rounded-full bg-white flex justify-center items-center">
                <img alt="logo" src={skill.logo} />
              </div>
              <div className="shadow-md shadow-[#FA6C2C] bg-white text-center w-full py-[5px] inline-block">
                <h1>
                  {skill.name}{" "}
                  <span className="text-[#FA6C2C] font-bold">
                    <CountUp enableScrollSpy end={skill.percentage} duration={2} />%
                  </span>
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <div className="w-1/2 iPhoneSE:w-full pr-[5%] iPhoneSE:pr-0 laptop:pr-[5%] laptop:w-1/2">
        <div className="border-[1px] border-[#FA6C2C] mb-[10%] ">
          <button
            onClick={(e) => handleButton(e)}
            className={` rounded-md ${
              activeButton === "Professional Experiences"
                ? "bg-[#FA6C2C] text-white"
                : "bg-white text-black"
            } font-bold w-[90%] laptop:w-[45%] p-[13px] m-[10px]`}
          >
            Professional Experiences
          </button>
          <button
            onClick={(e) => handleButton(e)}
            className={`rounded-md ${
              activeButton === "Education"
                ? "bg-[#FA6C2C] text-white"
                : "bg-white text-black"
            } font-bold w-[90%] laptop:w-[45%] p-[13px] m-[10px]`}
          >
            Education
          </button>
        </div>
        <div className="flex flex-col gap-[20px] pb-0 iPhoneSE:pb-[30px] laptop:pb-0 ">
          {cards.map((data) => (
            <div key={data.title} className="flex bg-white p-[20px] rounded-lg items-center">
              <div className="border-[1px] border-[#FA6C2C] flex justify-center min-h-[70px] min-w-[70px] items-center rounded-full">
                <img
                  onClick={()=>handleClickOpen(data)}
                  alt="company-logo"
                  // src="https://credesign.vercel.app/onePage/onePageFour/img/tabLogoOne.png"
                  src={data.logo}
                  className="h-[60px] cursor-pointer  rounded-full"
                />
              </div>
              <div className="w-[90%] pl-[2%]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[20px] iPhoneSE:text-[15px] laptop:text-[20px]">
                    {data.title}
                  </h1>
                  <p className="text-[#FA6C2C] font-bold">{data.yoE}</p>
                </div>
                <div className="flex justify-between iPhoneSE:text-[15px] laptop:text-[20px]">
                  <h4>{data.subTitle}</h4>
                  <h2>{data.timeScale}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedData && <Dialog data={selectedData} open={open} handleClose={handleClose}/>}
      </div>
    </div>
  );
};

export default EducationAndExperience;
