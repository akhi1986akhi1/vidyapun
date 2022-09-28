import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CareerService } from '../careerService/career.service';


@Component({
  selector: 'app-career-devehome',
  templateUrl: './career-devehome.component.html',
  styleUrls: ['./career-devehome.component.scss']
})
export class CareerDevehomeComponent implements OnInit {

  stream = [];
  spec;
  sub = [];
  usercarOp = [];
  selectedData = [];
  subjectList:any=[];
  careerOpotunity :any =[];
  // subjectList = [
  //   {
  //     "BE/B.Tech - Bachelors (Technology)":
  //       [
  //         "Mechanical Engineering",
  //         "Civil Engineering",
  //         "Electronics & Comm. Engineering",
  //         "Electrical & Electronics Engineering",
  //         "Computer Science ",
  //         "Information Technology Engineering",
  //         "Mining Engineering",
  //         "Aeronautical Engineering",
  //         "Food Technology",
  //         "Petro Chemical Engineering",
  //         "Cement Technology Engineering",
  //         "Embedded System & VLSI Design",
  //       ],

  //     "MBA/PGDM - Masters (Business Administration)":
  //       [
  //         "IT",
  //         "Human Resource",
  //         "Marketting",
  //         "Finance",
  //         "Operation Management",
  //         "Logistic Management",
  //         "Hospital Management",
  //         "International Bussiness Management",
  //         "Banking & Insurance Management",
  //         "Information Technology Management",
  //         "Production Management",
  //         "Hotel Management"
  //       ],
  //     "BBA/BBM - Bachelors (Business Administration)":
  //       [
  //         "Business Administration",
  //         "Banking and Insurance",
  //         "Human Resource",
  //         "Finance Management",
  //         "International Business",
  //         "Marketting Management",
  //         "Computer Applications",
  //         "Digital Marketing",
  //         "Retail Management",
  //         "Entrepreneurship",
  //         "Logistics Management",
  //         "Hospitality",
  //         "Tourism",
  //         "Import and Export Management",
  //         "Sports Management",
  //         "Hospital & Healthcare",
  //         "Accounting",
  //         "Supply Chain",
  //         "Retail"
  //       ],
  //     "BA - Bachelors (Arts)": ["Hindi", "English", "History", "Pol. Science", "Economics", "Geography"],
  //     "BCA - Bachelors (Computer Applications)": ["BCA"],
  //     "MCA - Masters (Computer Applications)": ["MCA"],
  //     "ME/M.Tech - Masters (Technology)":
  //       [
  //         "Computer Science and Engineering",
  //         "Computer Technology & Applications",
  //         "Digital Communication", "Electrical Power System",
  //         "Information Technology",
  //         "Power Electronics",
  //         "Software Engineering",
  //         "Thermal Engineering ",
  //         "VLSI",
  //         "Industrial Design",
  //         "Structural Design",
  //         "Highway",
  //         "Construction Technology & Management",
  //         "Transportation",
  //         "Environmental Engineering ",
  //         "Advanced Production System ",
  //         "Aero Space Engineering",
  //         "Soil and water conservation engineering",
  //         "Farm machinery and power engineering",
  //         "Embedded System & VLSI Design"
  //       ],
  //     "B.Sc - Bachelors (Science)": ["Physics", "Chemistry", "Biology", "Bio-Chemistry", "Bio-Technology", "PCM", "PCB"],
  //     "M.Sc - Masters (Science)": ["Physics", "Chemistry", "Bio-Chemistry", "Bio-Technology", "Mathmetics", "Zoology", "Botany"],
  //     "MA - Masters (Arts)": ["Hindi", "English", "History", "Pol. Science", "Economics", "Sociology", "Geography"],
  //     "BA LLB - Bachelor (Law)": ["BALLB"],
  //     "LLB - Bachelor (Law)": ["LLB"],
  //     "LLM - Master of Legislative law":
  //       [
  //         "Constitutional Law",
  //         "Family Law",
  //         "Human Rights Law",
  //         "International Trade & Business Law",
  //         "Corporate Law & Governance Law",
  //         "Taxation Law",
  //         "Environmental Law",
  //         "Insurance Law",
  //         "Criminal Law"
  //       ],
  //     "Diploma - (Ploytechnique)":
  //       [
  //         "Mechanical Engineering",
  //         "Civil Engineering ",
  //         "Computer Science Engineering ",
  //         "Electronics & Comm. Engineering",
  //         "Electrical & Electronic Engineering",
  //         "Agriculture Technology ",
  //         " Mining Engineering",
  //         "Aeronautical Engineering",
  //         "Food Technology",
  //         "Cement Technology",
  //         "Mine Surveying ",
  //       ],

  //     "Bachelor of Animation - Bachelor (Animation)": [],
  //     "Bachelors (Animation & Graphic Design) - Bachelor (Arts)": [],
  //     "BHM (Hospital) - Bachelor (Management)": [],
  //     "B.Planning - Bachelor (Architecture)": [],
  //     "Bachelors in Vocational Courses - Bachelor (Vocational Courses)": [],
  //     "B.Sc (Nursing) - Bachelor (Paramedical)": [],
  //     "BSW - Bachelor (Arts)": [],
  //     "B.Sc (Medicine) - Bachelor (Medical)": [],
  //     "B.Ed - Bachelor (Education)": [
  //       "B.Ed - Biological Science",
  //       "B.Ed - Mathmatics",
  //       "B.Ed - Home Science",
  //       "B.Ed - Political Science",
  //       "B.Ed - Computer Science",
  //       "B.Ed - Economics"
  //     ],
  //     "BBA (Aviation) - Bachelor (Aviation)": [],
  //     "B.Pharm - Bachelor (Pharmacy)": [
  //       "B.Pharm - Bachelor (Pharmacy)"
  //     ],
  //     "B.Sc (Agriculture) - Bachelor (Agriculture)": [],
  //     "B.Des - Bachelor (Design)": [
  //       "Interior Design",
  //       "Fashion Design",
  //       "Fashion Merchandise",
  //       "Visual Merchandise",
  //       "Jewelry Design",
  //       "Product Design",
  //       "Furniture Design",
  //       "Industrial Design",
  //       "Graphic Design",
  //       "Color Consultancy",
  //       "Fashion Consultancy"
  //     ],
  //     "M.P.Ed - Masters (Education)": [],
  //     "MMS - Masters (Management)": [],
  //     "M.Pharm - Masters (Pharmacy)": [],
  //     "M.Ed - Masters (Education)": [],
  //     "Executive MBA - Masters (Management)": [],
  //     "M.Des - Masters (Design)": [],
  //     "Master of Animation - Masters (Animation)": [],
  //     "M.Com - Masters (Commerce)": [],
  //     "LLM - Masters (Law)": [],
  //     "M.F.Sc - Masters (Science)": [],
  //     "MPH - Masters (Medical)": [],
  //     "M.Ch - Masters (Medical)": [],
  //     "MSW - Masters (Arts)": [],
  //     "M.Arch - Masters (Architecture)": [],
  //     "MHA - Masters (Management)": [],
  //     "M.Sc (Agriculture) - Masters (Agriculture)": [],
  //     "M.Sc (Aviation) - Masters (Aviation)": [],
  //     "M.Sc (Medicine) - Masters (Medical)": [],
  //     "M.Sc (Nursing) - Masters (Paramedical)": [],
  //     "Master of Physiotherapy(MPT) - Masters (Medical)": [],
  //     "Masters in Vocational Courses - Masters (Vocational Courses)": [],
  //     "MDS - Masters (Dental)": [],
  //     "MHM - Masters (Hotel Management)": [],
  //     "MMC - Masters (Mass Communications)": [],
  //     "MS - Masters (Medical)": [],
  //     "MVSc - Masters (Veterinary Sciences)": [],
  //     "M.Planning - Masters (Architecture)": [],
  //     "MD - Doctorate (Medical)": [],
  //     "M.Phil/Ph.D in Science - Doctorate (Science)": [],
  //     "M.Phil/Ph.D in Pharmacy - Doctorate (Pharmacy)": [],

  //   }

  // ];



  // careerOpotunity = [{
  //   "Mechanical Engineering":
  //     [
  //       {
  //         "id": "01",
  //         "position": "Mechanical Engineering Technician",
  //         "avgSal": "12L",
  //         "rating": 4,
  //         "image": "card05.png"
  //       },
  //       {
  //         "id": "02",
  //         "position": "Associate Mechanical Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card04.png"
  //       },
  //       {
  //         "id": "03",
  //         "position": "Mechanical Engineer",
  //         "avgSal": "12L",
  //         "rating": 4,
  //         "image": "card02.png"
  //       },
  //       {
  //         "id": "04",
  //         "position": "Biomedical Engineers",
  //         "avgSal": "12L",
  //         "rating": 4.7,
  //         "image": "card01.png"
  //       },
  //       {
  //         "id": "05",
  //         "position": "Manufacturing Engineer",
  //         "avgSal": "12L",
  //         "rating": 4,
  //         "image": "card03.png"
  //       },
  //       {
  //         "id": "06",
  //         "position": "Senior Mechanical Engineer",
  //         "avgSal": "12L",
  //         "rating": 4,
  //         "image": "card05.png"
  //       },
  //       {
  //         "id": "07",
  //         "position": "Mechanical Engineering Manager",
  //         "avgSal": "12L",
  //         "rating": 4,
  //         "image": "card04.png"
  //       },
  //       {
  //         "id": "08",
  //         "position": "Senior Applications Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card07.png"
  //       },
  //       {
  //         "id": "09",
  //         "position": "Research and Development Director",
  //         "avgSal": "12L",
  //         "rating": 4.7,
  //         "image": "card06.png"
  //       },
  //     ],
  //   "Civil Engineering":
  //     [
  //       {
  //         "id": "10",
  //         "position": "Structural Engineers",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card05.png"
  //       },
  //       {
  //         "id": "11",
  //         "position": "Geotechnical Engineers",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card06.png"
  //       },
  //       {
  //         "id": "12",
  //         "position": "Site Engineers",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card09.png"
  //       },
  //       {
  //         "id": "13",
  //         "position": "Construction Engineers",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },

  //     ],
  //   "Electronics & Comm. Engineering":
  //     [
  //       {
  //         "id": "14",
  //         "position": "Electronics Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "15",
  //         "position": "Communications Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "16",
  //         "position": "Technical Director",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "17",
  //         "position": "Network Planning Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "18",
  //         "position": "Desktop Support Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "19",
  //         "position": "Field Test Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "20",
  //         "position": "Electronics Device and Development Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "20",
  //         "position": "Electronics Device and Development Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "20",
  //         "position": "Electronics Device and Development Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "20",
  //         "position": "Electronics Device and Development Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //       {
  //         "id": "20",
  //         "position": "Electronics Device and Development Engineer",
  //         "avgSal": "12L",
  //         "rating": 4.5,
  //         "image": "card11.png"
  //       },
  //     ],
  //   "Electrical & Electronics Engineering": [],
  //   "Computer Science": [],
  //   "Information Technology Engineering": [],
  //   "Mining Engineering": [],
  //   "Aeronautical Engineering": [],
  //   "Food Technology": [],
  //   "Petro Chemical Engineering": [],
  //   "Cement Technology Engineering": [],
  //   "Embedded System & VLSI Design": [],
  //   "Civil": ["Building Construction", "Road Construction", "Water Resources", "Harvesting"],
  //   "Mechanical": ["Automobile", "Aviation", "Big project"],
  //   "IT": ["Development", "Service", "Cloud", "Database Admin"],
  //   "HR":
  //     [
  //       "Human Resource Manager",
  //       "Human Resource Generalist",
  //       "Staffing Director",
  //       "Technical Recruiter",
  //       "Compensation Manager",
  //       "Employee Relations Manager",
  //       "Employment Manager",
  //       "Director of HR Training and Development",
  //       "Human Resource Consultant",
  //       "International HR Professionals",
  //       "Human Resource Specialist IT",
  //       "Employee Education Consultant",
  //       "Human Resource Executive",
  //       "Human Resource Entrepreneur"
  //     ],
  //   "Marketting":
  //     [
  //       "Marketing Manager",
  //       "Brand Manager",
  //       "Asset Manager",
  //       "Corporate Sales",
  //       "Media Planner",
  //       "Media strategist",
  //       "Media manager",
  //       "Product Manager",
  //       "Head of Digital Marketing",
  //       "Online marketing",
  //       "Retailing Management",
  //       "Customer Relationship Management",
  //       "Analytical Marketing",
  //       "Competitive Marketing",
  //       "Advertising Management",
  //       "TV producer",
  //       "Audio/Video Editor",
  //       "Corporate Communications Head",
  //       "Digital Media Analyst",
  //       "Channel Head"
  //     ],
  //   "Finance":
  //     [
  //       {
  //         "position": "Financial manager",
  //         "avgSal": "12L",
  //         "rating": 4.5
  //       },
  //       {
  //         "position": "Credit analyst",
  //         "avgSal": "18L",
  //         "rating": 4.6
  //       },
  //       {
  //         "position": "Financial investment analyst",
  //         "avgSal": "10L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Loan officer",
  //         "avgSal": "2.5L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Tax assistant",
  //         "avgSal": "2L",
  //         "rating": 2
  //       }
  //     ],
  //   "Operation Management":
  //     [
  //       {
  //         "position": "Operations coordinator",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Operations analyst",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Operations supervisor",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Operations manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Project manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Program manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Operations engineer",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Director of operations",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Chief operating officer",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Vice president of operations",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },

  //     ],

  //   "Business Administration":
  //     [
  //       {
  //         "position": "Sales Manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Tax Manager",
  //         "avgSal": "12L",
  //         "rating": 4.5
  //       },
  //       {
  //         "position": "Actuary",
  //         "avgSal": "4L",
  //         "rating": 2.8
  //       },
  //       {
  //         "position": "Management Consultant",
  //         "avgSal": "10L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Business development manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },



  //     ],
  //   "Banking and Insurance":
  //     [
  //       {
  //         "position": "Investment Banker",
  //         "avgSal": "10L",
  //         "rating": 4.5
  //       },
  //       {
  //         "position": "Administrative Officer",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Assistant Controller",
  //         "avgSal": "9L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Credit & Risk Manager",
  //         "avgSal": "20L",
  //         "rating": 4.5
  //       },
  //       {
  //         "position": "Asset Manager",
  //         "avgSal": "7L",
  //         "rating": 3
  //       }
  //     ],
  //   "Human Resource":
  //     [
  //       {
  //         "position": "HR Executive",
  //         "avgSal": "3L",
  //         "rating": 2.5
  //       },
  //       {
  //         "position": "HR Manager",
  //         "avgSal": "7L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "PR Manager",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "IT Recruiter",
  //         "avgSal": "3L",
  //         "rating": 2.5
  //       },
  //       {
  //         "position": "Trainee HR Management",
  //         "avgSal": "2L",
  //         "rating": 2
  //       }

  //     ],
  //   "Finance Management":
  //     [
  //       {
  //         "position": "Financial manager",
  //         "avgSal": "12L",
  //         "rating": 4.5
  //       },
  //       {
  //         "position": "Credit analyst",
  //         "avgSal": "18L",
  //         "rating": 4.6
  //       },
  //       {
  //         "position": "Financial investment analyst",
  //         "avgSal": "10L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Loan officer",
  //         "avgSal": "2.5L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Tax assistant",
  //         "avgSal": "2L",
  //         "rating": 2
  //       }

  //     ],
  //   "International Business":
  //     [

  //       {
  //         "position": "Business Advisor",
  //         "avgSal": "12L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Business Analyst",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Human Resources Officer",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Procurement Manager",
  //         "avgSal": "12L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Product Manager",
  //         "avgSal": "16L",
  //         "rating": 4
  //       }

  //     ],
  //   "Marketting Management":
  //     [
  //       {
  //         "position": "Marketing executive",
  //         "avgSal": "3L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Advertising manager",
  //         "avgSal": "16L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Market research analyst",
  //         "avgSal": "3.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Marketing manager",
  //         "avgSal": "21L",
  //         "rating": 4
  //       },
  //       {
  //         "position": "Brand manager",
  //         "avgSal": "10L",
  //         "rating": 3.5
  //       }
  //     ],
  //   "Computer Applications":
  //     [
  //       {
  //         "position": "Software Developer",
  //         "avgSal": "4.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "System Programmer",
  //         "avgSal": "7L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Web Designer",
  //         "avgSal": "7L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Web Designer",
  //         "avgSal": "2.5L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Network Administrator",
  //         "avgSal": "3.5L",
  //         "rating": 2.5
  //       },
  //       {
  //         "position": "Network Analyst",
  //         "avgSal": "3.5L",
  //         "rating": 2.5
  //       },
  //       {
  //         "position": "Quality Assurance Officer",
  //         "avgSal": "4.5L",
  //         "rating": 3
  //       },

  //     ],
  //   "Digital Marketing":
  //     [
  //       {
  //         "position": "Data Analytics",
  //         "avgSal": "5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Social Media Marketing",
  //         "avgSal": "7L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Content Marketing",
  //         "avgSal": "10L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Project Manager",
  //         "avgSal": "10L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Event Management",
  //         "avgSal": "7L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Business Management",
  //         "avgSal": "10L",
  //         "rating": 3.5
  //       }
  //     ],
  //   "Retail Management":
  //     [

  //       {
  //         "position": "Customer Care Executives",
  //         "avgSal": "2.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Floor Managers",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Lobby Managers",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Supply Chain Distributor",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       }
  //     ],
  //   "Entrepreneurship":
  //     [
  //       {
  //         "position": "System Analyst",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Trainee Telesales",
  //         "avgSal": "2.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Chief Human Resources Officer",
  //         "avgSal": "6L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Executive/Office Assistant",
  //         "avgSal": "5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Finance Controller",
  //         "avgSal": "18L",
  //         "rating": 4
  //       }
  //     ],
  //   "Logistics Management":
  //     [
  //       {
  //         "position": "Shipping Coordinator",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Warehouse Supervisor",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Operations Manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Logistics Coordinator",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },


  //     ],
  //   "Hospitality":
  //     [

  //       {
  //         "position": "Executive Trainee",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Guest Service Officer",
  //         "avgSal": "2L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Reservations Manager",
  //         "avgSal": "3.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Executive Search Consultant",
  //         "avgSal": "6L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Tour Booking Officer",
  //         "avgSal": "2L",
  //         "rating": 2
  //       }

  //     ],
  //   "Tourism":
  //     [
  //       {
  //         "position": "Lobby Manager",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Travel Executive",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Travel Coordinator",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Ticketing Executive",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Front Office",
  //         "avgSal": "3L",
  //         "rating": 2
  //       }
  //     ],
  //   "Import and Export Management":
  //     [
  //       {
  //         "position": "Foreign Trade Analyst",
  //         "avgSal": "9L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Export Manager",
  //         "avgSal": "6L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Relationship Manager",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Foreign Trade Manager",
  //         "avgSal": "6.5L",
  //         "rating": 3
  //       }
  //     ],
  //   "Sports Management":
  //     [
  //       {
  //         "position": "HR Manager",
  //         "avgSal": "7L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Event Manager",
  //         "avgSal": "4.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Finance Manager",
  //         "avgSal": "9L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "PR Manager",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Sales Manager",
  //         "avgSal": "6.5L",
  //         "rating": 3
  //       }
  //     ],
  //   "Hospital & Healthcare":
  //     [
  //       {
  //         "position": "Catering Supervisor & Assistant",
  //         "avgSal": "5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Catering Officer",
  //         "avgSal": "3.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Hospitality Executive",
  //         "avgSal": "3L",
  //         "rating": 2
  //       },
  //       {
  //         "position": "Cabin Crew",
  //         "avgSal": "6.5L",
  //         "rating": 3
  //       },
  //       {
  //         "position": "Sales Manager",
  //         "avgSal": "7.5L",
  //         "rating": 3.5
  //       }
  //     ],
  //   "Accounting":
  //     [
  //       {
  //         "position": "Chief Accounting Officer",
  //         "avgSal": "35L",
  //         "rating": 4.6
  //       },
  //       {
  //         "position": "Audit Manager",
  //         "avgSal": "16L",
  //         "rating": 4.2
  //       },
  //       {
  //         "position": "Tax Assistant",
  //         "avgSal": "4.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Finance Executive",
  //         "avgSal": "7.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Assistant Controller",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       }
  //     ],
  //   "Supply Chain":
  //     [
  //       {
  //         "position": "Warehouse Supervisors",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Shipping Coordinator",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Operations Manager",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Export Sales Coordinator",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       },
  //       {
  //         "position": "Logistics Coordinator",
  //         "avgSal": "6.5L",
  //         "rating": 3.5
  //       }

  //     ],

  //   "Interior Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png",
  //       "headerBg":"linear-gradient(#e50000,#9a1a1a)"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png",
  //       "headerBg":"linear-gradient(#e46d00,#98561b)",
  //       "about":"Typically, <i>illustrations</i> are used by clients in publications including books, periodicals, websites, and adverts. Depending on the requirements and tastes of the client, they may work together to produce graphics.",
        
  //       "description":"<p>The duties in a career as an Illustrator are as follows –</p><ul><li> Illustrators meet with clients and project managers to discuss the specifications of a project. Illustrators first consult with a customer to go through the design and project specifications.</li><li>If they are employed by an organization, they might meet with a project manager or team lead to get instructions on their task.</li><li>The illustrator and client establish a deadline after considering the project’s specifics. With a timeline in hand, the illustrator can use it to finish the project’s various components.</li><li>Also, information about salary, due dates, and project agreements are negotiated by illustrators.</li><li>To help them produce the desired aesthetic results, they employ several tools. Typically, illustrators create sample illustrations to present to clients in order to gauge their approval of the work and identify any adjustments that may be required.</li><li>Depending on the client’s response, illustrators can make adjustments to the project at this stage and change the specifications for the artwork.</li><li>They conduct a study to better comprehend the specifics of a project. They can also conduct studies on the ideas and subjects related to the project, such as technical words or medical notions.</li><li>They might get more comments from the client about the item that they can use as a guide for future work.</li></ul><h3>Job roles for an Illustrator</h3><ul><li><h5>Product Illustrator:</h5><p>Product illustrators view their illustrations as a means of developing a completely distinct identity for a product and as a crucial component of the narrative that must be told for the product to succeed.</p></li><li><h5>Fashion Illustrator:</h5><p>Almost any illustration with an emphasis on clothing, accessories, or associated media falls under the umbrella of fashion illustration. The choice of artistic medium is typically decided by the designer, and fashion illustrators may utilize realistic depictions or more abstract sketches.</p></li></ul>",
  //       "skills":["Unique Style","Creativity","Convincing","Communication","Visual library"],
  //       "career":["Graphic Designing","Advertising","Product Design","Book Design","Architecture"],
  //       "topCourses":["Bachelor of Fine Arts","Bachelor of Visual Arts","BA Illustrator","UG Diploma in Animation & Illustration","B.Sc in Graphics, Illustration, Web Design","MFA","MA Illustration","M.Sc Visual Communication"],
  //       "recuiters":[
  //         {
  //           "companyName":"BigBook Designs",

  //         },
  //         {
  //           "companyName":"DataMatics",
            
  //         },
  //         {
  //           "companyName":"Geethik Technologies",
            
  //         },
  //         {
  //           "companyName":"Medlar Publishing Solutions",
            
  //         },
  //         {
  //           "companyName":"Pro Global Business Solutions",
            
  //         }
  //       ]
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png",
  //       "headerBg":"linear-gradient(#01ade3,#1a7b99)",
  //       "about":"Fashion Merchandisers oversee the style design of garments and accessories in retail clothing stores, costume suppliers, or fashion houses. It is the Fashion Merchandiser's responsibility to predict fashion trends, plan and implement store layouts, purchase apparel, and collaborate with designers."
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png",
  //       "headerBg":"linear-gradient(#01ade3,#1a7b99)",
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Fashion Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Fashion Merchandise": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Visual Merchandise": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Jewelry Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Product Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Furniture Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Industrial Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Graphic Design": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Color Consultancy": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "Fashion Consultancy": [
  //     {
  //       "id": "",
  //       "position": "Graphic Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Illustrator",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Merchandiser",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Costume Designer",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Textile Designers",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Forecasters",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Entrepreneurs",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Fashion Stylists",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Design Manager",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Color Consultant",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     }
  //   ],
  //   "B.Ed - Biological Science": [
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Ed - Mathmatics": [
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Ed - Home Science": [
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Ed - Political Science": [
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Ed - Computer Science":[
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Ed - Economics":[
  //     {
  //       "id": "",
  //       "position": "Central Goverment School Teacher",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card02.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "School Assistant",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card05.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Post Graduate Teacher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card07.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Primary School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Elementry School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card06.png"
  //     },

  //     {
  //       "id": "",
  //       "position": "School Teacher",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card03.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Counsellor",
  //       "avgSal": "2.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Administrator",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card08.webp"
  //     },
  //     {
  //       "id": "",
  //       "position": "Educational Researcher",
  //       "avgSal": "4.5L",
  //       "rating": 3.5,
  //       "image": "card09.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Online Tutor",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card01.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Content Writer",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card11.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Researcher",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     }
  //   ],
  //   "B.Pharm - Bachelor (Pharmacy)":[
  //     {
  //       "id": "",
  //       "position": "Medical Writer",
  //       "avgSal": "3L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     },
  //     {
  //       "id": "",
  //       "position": "Clinical Research Associate",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png"
  //     },
  //     {
  //       "id": "",
        
  //       "position": "Drug Safety Associate",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "Drug Inspector",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "Pharmaceutical Scientist",
  //       "avgSal": "6.5L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "Formulation Development Associate",
  //       "avgSal": "5L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "Sales/ Marketing Executive",
  //       "avgSal": "4L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "Pharmacy Business",
  //       "avgSal": "8L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     },
  //     {
  //       "id": "",
  //       "position": "QA/QC Associate",
  //       "avgSal": "3.5L",
  //       "rating": 3.5,
  //       "image": "card04.png" 
  //     }
  //   ]


  // }];
  constructor(private router: Router,private careerservice:CareerService) { }

  ngOnInit() {
    this.getAllSubjectList();
    this.getAllCareerOportunity();
    console.log("this is subject list", this.subjectList['0']);

    console.log(Object.keys(this.subjectList['0']));
    this.sub = Object.keys(this.subjectList['0']);
    this.sub = this.sub.sort();
    console.log(this.sub)
    console.log("this is values", this.subjectList);
    console.log("user career", this.usercarOp.length);
  }


getAllSubjectList(){
  
  this.subjectList = this.careerservice.getSubjectList();
}
getAllCareerOportunity(){
  this.careerOpotunity = this.careerservice.getCareerOportunity();
}


  selectSubjectValues(x) {
    console.log(x)
    console.log("this is subject list", this.subjectList['0'][x])
    this.stream = this.subjectList['0'][x];
    this.stream = this.stream.sort();
    console.log("stream is ****:", this.stream);
    this.usercarOp = [];

  }

  selectStreamValues(stream) {
    console.log("stream is ", stream)
    this.spec = stream;
    console.log("Your career oportunity", this.careerOpotunity[0][stream][3 + 1]);
    this.usercarOp = this.careerOpotunity[0][stream];
    console.log("user career oportunity", this.usercarOp);
  }
  navCareerInfo(id) {
    // let data = 
    console.log("id is", id)
    console.log("selected skill is: ", this.careerOpotunity[0][this.spec][id])
    this.selectedData = this.careerOpotunity[0][this.spec][id]
    console.log("selected career oportunity:",this.selectedData)
    let doc = { id:id,spec:this.spec}
    console.log(this.careerOpotunity);
    this.router.navigate(['/careerInfo/' + id, doc]);
    // this.selectedData
  }

}
