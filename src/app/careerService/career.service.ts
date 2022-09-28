import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerService {


  subjectList = [
    {
      "BE/B.Tech - Bachelors (Technology)":
        [
          "Mechanical Engineering",
          "Civil Engineering",
          "Electronics & Comm. Engineering",
          "Electrical & Electronics Engineering",
          "Computer Science ",
          "Information Technology Engineering",
          "Mining Engineering",
          "Aeronautical Engineering",
          "Food Technology",
          "Petro Chemical Engineering",
          "Cement Technology Engineering",
          "Embedded System & VLSI Design",
        ],

      "MBA/PGDM - Masters (Business Administration)":
        [
          "IT",
          "Human Resource",
          "Marketting",
          "Finance",
          "Operation Management",
          "Logistic Management",
          "Hospital Management",
          "International Bussiness Management",
          "Banking & Insurance Management",
          "Information Technology Management",
          "Production Management",
          "Hotel Management"
        ],
      "BBA/BBM - Bachelors (Business Administration)":
        [
          "Business Administration",
          "Banking and Insurance",
          "Human Resource",
          "Finance Management",
          "International Business",
          "Marketting Management",
          "Computer Applications",
          "Digital Marketing",
          "Retail Management",
          "Entrepreneurship",
          "Logistics Management",
          "Hospitality",
          "Tourism",
          "Import and Export Management",
          "Sports Management",
          "Hospital & Healthcare",
          "Accounting",
          "Supply Chain",
          "Retail"
        ],
      "BA - Bachelors (Arts)": ["Hindi", "English", "History", "Pol. Science", "Economics", "Geography"],
      "B.Com - Bachelor of Commerce": [
        "Accounts and Finance",
        "Investment Management",
        "Financial Market",
        "Statistics",
        "Tourism and Travel Management",
        "Banking and Finance",
        "Banking and Insurance",
        "E-Commerce",
        "Economics",
        "Banking and Insurance",
        "B.Com - Computer Applications",
        "B.Com - Information Technology",
        "B.Com - International Business",
        "Accountancy",
        "Business Economics",
        "Foreign Trade Management"
      ],
      "BCA - Bachelors (Computer Applications)": ["BCA"],
      "MCA - Masters (Computer Applications)": ["MCA"],
      "ME/M.Tech - Masters (Technology)":
        [
          "Computer Science and Engineering",
          "Computer Technology & Applications",
          "Digital Communication", "Electrical Power System",
          "Information Technology",
          "Power Electronics",
          "Software Engineering",
          "Thermal Engineering ",
          "VLSI",
          "Industrial Design",
          "Structural Design",
          "Highway",
          "Construction Technology & Management",
          "Transportation",
          "Environmental Engineering ",
          "Advanced Production System ",
          "Aero Space Engineering",
          "Soil and water conservation engineering",
          "Farm machinery and power engineering",
          "Embedded System & VLSI Design"
        ],
      "B.Sc - Bachelors (Science)": [
        "BSc IT",
        "Hotel Management",
        "Aeronautical Science",
        "Actuarial Science",
        "Anthropology",
        "Biological Science",
        "Physics",
        "Mathematics",
        "Geology",
        "Software Engineering",
        "Anatomy",
        "Applied Chemistry",
        "B.Sc. Statistics",
        "Clinical Nutrition",
        "Economics",
        "Environmental Science",
        "B.Sc. Food Technology",
        "Geography",
        "Microbiology",
        "Nautical Science",
        "Physiotherapy",
        "BSc Forestry",
        "Chemistry",
        "Biology",
        "Bio-Chemistry",
        "Bio-Technology",
        "PCM",
        "PCB",
        "Botany",
        "B.Sc. Computer Applications",
        "B.Sc. Computer Science",
        "Electronics",
        "Food Sciences",
        "Forensic Sciences",
        "Home Science",
        "Instrumentation",
        "Optometry",
        "Physiology",
        "Psychology",
      ],

      "M.Sc - Masters (Science)": ["Physics", "Chemistry", "Bio-Chemistry", "Bio-Technology", "Mathmetics", "Zoology", "Botany"],
      "MA - Masters (Arts)": ["Hindi", "English", "History", "Pol. Science", "Economics", "Sociology", "Geography"],
      "BA LLB - Bachelor (Law)": ["BALLB"],
      "LLB - Bachelor (Law)": ["LLB"],
      "LLM - Master of Legislative law":
        [
          "Constitutional Law",
          "Family Law",
          "Human Rights Law",
          "International Trade & Business Law",
          "Corporate Law & Governance Law",
          "Taxation Law",
          "Environmental Law",
          "Insurance Law",
          "Criminal Law"
        ],
      "Diploma - (Ploytechnique)":
        [
          "Mechanical Engineering",
          "Civil Engineering ",
          "Computer Science Engineering ",
          "Electronics & Comm. Engineering",
          "Electrical & Electronic Engineering",
          "Agriculture Technology ",
          " Mining Engineering",
          "Aeronautical Engineering",
          "Food Technology",
          "Cement Technology",
          "Mine Surveying ",
        ],

      "Bachelor of Animation - Bachelor (Animation)": [],
      "Bachelors (Animation & Graphic Design) - Bachelor (Arts)": [],
      "BHM (Hospital) - Bachelor (Management)": [],
      "B.Planning - Bachelor (Architecture)": [
        "B.Planning - Bachelor (Architecture)"
      ],
      "Bachelors in Vocational Courses - Bachelor (Vocational Courses)": [],
      "B.Sc (Nursing) - Bachelor (Paramedical)": [
        "B.Sc (Nursing) - Bachelor (Paramedical)"
      ],
      "BSW - Bachelor (Arts)": [],
      "B.Sc (Medicine) - Bachelor (Medical)": [
        "B.Sc (Medicine) - Bachelor (Medical)"
      ],
      "B.Ed - Bachelor (Education)": [
        "B.Ed - Biological Science",
        "B.Ed - Mathmatics",
        "B.Ed - Home Science",
        "B.Ed - Political Science",
        "B.Ed - Computer Science",
        "B.Ed - Economics"
      ],
      "BBA (Aviation) - Bachelor (Aviation)": [],
      "B.Pharm - Bachelor (Pharmacy)": [
        "B.Pharm - Bachelor (Pharmacy)"
      ],
      "B.Sc (Agriculture) - Bachelor (Agriculture)": [
        "B.Sc (Agriculture) - Bachelor (Agriculture)"
      ],
      "B.Des - Bachelor (Design)": [
        "Interior Design",
        "Fashion Design",
        "Fashion Merchandise",
        "Visual Merchandise",
        "Jewelry Design",
        "Product Design",
        "Furniture Design",
        "Industrial Design",
        "Graphic Design",
        "Color Consultancy",
        "Fashion Consultancy"
      ],
      "M.P.Ed - Masters (Education)": [],
      "MMS - Masters (Management)": [],
      "M.Pharm - Masters (Pharmacy)": [],
      "M.Ed - Masters (Education)": [],
      "Executive MBA - Masters (Management)": [],
      "M.Des - Masters (Design)": [],
      "Master of Animation - Masters (Animation)": [],
      "M.Com - Masters (Commerce)": [],
      "LLM - Masters (Law)": [],
      "M.F.Sc - Masters (Science)": [],
      "MPH - Masters (Medical)": [],
      "M.Ch - Masters (Medical)": [],
      "MSW - Masters (Arts)": [],
      "M.Arch - Masters (Architecture)": [],
      "MHA - Masters (Management)": [],
      "M.Sc (Agriculture) - Masters (Agriculture)": [],
      "M.Sc (Aviation) - Masters (Aviation)": [],
      "M.Sc (Medicine) - Masters (Medical)": [],
      "M.Sc (Nursing) - Masters (Paramedical)": [],
      "Master of Physiotherapy(MPT) - Masters (Medical)": [],
      "Masters in Vocational Courses - Masters (Vocational Courses)": [],
      "MDS - Masters (Dental)": [],
      "MHM - Masters (Hotel Management)": [],
      "MMC - Masters (Mass Communications)": [],
      "MS - Masters (Medical)": [],
      "MVSc - Masters (Veterinary Sciences)": [],
      "M.Planning - Masters (Architecture)": [],
      "MD - Doctorate (Medical)": [],
      "M.Phil/Ph.D in Science - Doctorate (Science)": [],
      "M.Phil/Ph.D in Pharmacy - Doctorate (Pharmacy)": [],

    }

  ];
  careerOpotunity = [{
    "Mechanical Engineering":
      [
        {
          "id": "01",
          "position": "Mechanical Engineering Technician",
          "avgSal": "12L",
          "rating": 4,
          "image": "card05.png"
        },
        {
          "id": "02",
          "position": "Associate Mechanical Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card04.png"
        },
        {
          "id": "03",
          "position": "Mechanical Engineer",
          "avgSal": "12L",
          "rating": 4,
          "image": "card02.png"
        },
        {
          "id": "04",
          "position": "Biomedical Engineers",
          "avgSal": "12L",
          "rating": 4.7,
          "image": "card01.png"
        },
        {
          "id": "05",
          "position": "Manufacturing Engineer",
          "avgSal": "12L",
          "rating": 4,
          "image": "card03.png"
        },
        {
          "id": "06",
          "position": "Senior Mechanical Engineer",
          "avgSal": "12L",
          "rating": 4,
          "image": "card05.png"
        },
        {
          "id": "07",
          "position": "Mechanical Engineering Manager",
          "avgSal": "12L",
          "rating": 4,
          "image": "card04.png"
        },
        {
          "id": "08",
          "position": "Senior Applications Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card07.png"
        },
        {
          "id": "09",
          "position": "Research and Development Director",
          "avgSal": "12L",
          "rating": 4.7,
          "image": "card06.png"
        },
      ],
    "Civil Engineering":
      [
        {
          "id": "10",
          "position": "Structural Engineers",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card05.png"
        },
        {
          "id": "11",
          "position": "Geotechnical Engineers",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card06.png"
        },
        {
          "id": "12",
          "position": "Site Engineers",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card09.png"
        },
        {
          "id": "13",
          "position": "Construction Engineers",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },

      ],
    "Electronics & Comm. Engineering":
      [
        {
          "id": "14",
          "position": "Electronics Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "15",
          "position": "Communications Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "16",
          "position": "Technical Director",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "17",
          "position": "Network Planning Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "18",
          "position": "Desktop Support Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "19",
          "position": "Field Test Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "20",
          "position": "Electronics Device and Development Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "20",
          "position": "Electronics Device and Development Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "20",
          "position": "Electronics Device and Development Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "20",
          "position": "Electronics Device and Development Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
        {
          "id": "20",
          "position": "Electronics Device and Development Engineer",
          "avgSal": "12L",
          "rating": 4.5,
          "image": "card11.png"
        },
      ],
    "Electrical & Electronics Engineering": [],
    "Computer Science": [],
    "Information Technology Engineering": [],
    "Mining Engineering": [],
    "Aeronautical Engineering": [],
    "Food Technology": [],
    "Petro Chemical Engineering": [],
    "Cement Technology Engineering": [],
    "Embedded System & VLSI Design": [],
    "Civil": ["Building Construction", "Road Construction", "Water Resources", "Harvesting"],
    "Mechanical": ["Automobile", "Aviation", "Big project"],
    "IT": ["Development", "Service", "Cloud", "Database Admin"],
    "HR":
      [
        "Human Resource Manager",
        "Human Resource Generalist",
        "Staffing Director",
        "Technical Recruiter",
        "Compensation Manager",
        "Employee Relations Manager",
        "Employment Manager",
        "Director of HR Training and Development",
        "Human Resource Consultant",
        "International HR Professionals",
        "Human Resource Specialist IT",
        "Employee Education Consultant",
        "Human Resource Executive",
        "Human Resource Entrepreneur"
      ],
    "Marketting":
      [
        "Marketing Manager",
        "Brand Manager",
        "Asset Manager",
        "Corporate Sales",
        "Media Planner",
        "Media strategist",
        "Media manager",
        "Product Manager",
        "Head of Digital Marketing",
        "Online marketing",
        "Retailing Management",
        "Customer Relationship Management",
        "Analytical Marketing",
        "Competitive Marketing",
        "Advertising Management",
        "TV producer",
        "Audio/Video Editor",
        "Corporate Communications Head",
        "Digital Media Analyst",
        "Channel Head"
      ],
    "Finance":
      [
        {
          "position": "Financial manager",
          "avgSal": "12L",
          "rating": 4.5
        },
        {
          "position": "Credit analyst",
          "avgSal": "18L",
          "rating": 4.6
        },
        {
          "position": "Financial investment analyst",
          "avgSal": "10L",
          "rating": 4
        },
        {
          "position": "Loan officer",
          "avgSal": "2.5L",
          "rating": 2
        },
        {
          "position": "Tax assistant",
          "avgSal": "2L",
          "rating": 2
        }
      ],
    "Operation Management":
      [
        {
          "position": "Operations coordinator",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Operations analyst",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Operations supervisor",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Operations manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Project manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Program manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Operations engineer",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Director of operations",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Chief operating officer",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Vice president of operations",
          "avgSal": "5L",
          "rating": 3
        },

      ],

    "Business Administration":
      [
        {
          "position": "Sales Manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Tax Manager",
          "avgSal": "12L",
          "rating": 4.5
        },
        {
          "position": "Actuary",
          "avgSal": "4L",
          "rating": 2.8
        },
        {
          "position": "Management Consultant",
          "avgSal": "10L",
          "rating": 4
        },
        {
          "position": "Business development manager",
          "avgSal": "5L",
          "rating": 3
        },



      ],
    "Banking and Insurance":
      [
        {
          "position": "Investment Banker",
          "avgSal": "10L",
          "rating": 4.5
        },
        {
          "position": "Administrative Officer",
          "avgSal": "6L",
          "rating": 3.5
        },
        {
          "position": "Assistant Controller",
          "avgSal": "9L",
          "rating": 4
        },
        {
          "position": "Credit & Risk Manager",
          "avgSal": "20L",
          "rating": 4.5
        },
        {
          "position": "Asset Manager",
          "avgSal": "7L",
          "rating": 3
        }
      ],
    "Human Resource":
      [
        {
          "position": "HR Executive",
          "avgSal": "3L",
          "rating": 2.5
        },
        {
          "position": "HR Manager",
          "avgSal": "7L",
          "rating": 3
        },
        {
          "position": "PR Manager",
          "avgSal": "6L",
          "rating": 3.5
        },
        {
          "position": "IT Recruiter",
          "avgSal": "3L",
          "rating": 2.5
        },
        {
          "position": "Trainee HR Management",
          "avgSal": "2L",
          "rating": 2
        }

      ],
    "Finance Management":
      [
        {
          "position": "Financial manager",
          "avgSal": "12L",
          "rating": 4.5
        },
        {
          "position": "Credit analyst",
          "avgSal": "18L",
          "rating": 4.6
        },
        {
          "position": "Financial investment analyst",
          "avgSal": "10L",
          "rating": 4
        },
        {
          "position": "Loan officer",
          "avgSal": "2.5L",
          "rating": 2
        },
        {
          "position": "Tax assistant",
          "avgSal": "2L",
          "rating": 2
        }

      ],
    "International Business":
      [

        {
          "position": "Business Advisor",
          "avgSal": "12L",
          "rating": 4
        },
        {
          "position": "Business Analyst",
          "avgSal": "6L",
          "rating": 3.5
        },
        {
          "position": "Human Resources Officer",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Procurement Manager",
          "avgSal": "12L",
          "rating": 4
        },
        {
          "position": "Product Manager",
          "avgSal": "16L",
          "rating": 4
        }

      ],
    "Marketting Management":
      [
        {
          "position": "Marketing executive",
          "avgSal": "3L",
          "rating": 3
        },
        {
          "position": "Advertising manager",
          "avgSal": "16L",
          "rating": 4
        },
        {
          "position": "Market research analyst",
          "avgSal": "3.5L",
          "rating": 3
        },
        {
          "position": "Marketing manager",
          "avgSal": "21L",
          "rating": 4
        },
        {
          "position": "Brand manager",
          "avgSal": "10L",
          "rating": 3.5
        }
      ],
    "Computer Applications":
      [
        {
          "position": "Software Developer",
          "avgSal": "4.5L",
          "rating": 3
        },
        {
          "position": "System Programmer",
          "avgSal": "7L",
          "rating": 3
        },
        {
          "position": "Web Designer",
          "avgSal": "7L",
          "rating": 3
        },
        {
          "position": "Web Designer",
          "avgSal": "2.5L",
          "rating": 2
        },
        {
          "position": "Network Administrator",
          "avgSal": "3.5L",
          "rating": 2.5
        },
        {
          "position": "Network Analyst",
          "avgSal": "3.5L",
          "rating": 2.5
        },
        {
          "position": "Quality Assurance Officer",
          "avgSal": "4.5L",
          "rating": 3
        },

      ],
    "Digital Marketing":
      [
        {
          "position": "Data Analytics",
          "avgSal": "5L",
          "rating": 3.5
        },
        {
          "position": "Social Media Marketing",
          "avgSal": "7L",
          "rating": 3.5
        },
        {
          "position": "Content Marketing",
          "avgSal": "10L",
          "rating": 3.5
        },
        {
          "position": "Project Manager",
          "avgSal": "10L",
          "rating": 3.5
        },
        {
          "position": "Event Management",
          "avgSal": "7L",
          "rating": 3
        },
        {
          "position": "Business Management",
          "avgSal": "10L",
          "rating": 3.5
        }
      ],
    "Retail Management":
      [

        {
          "position": "Customer Care Executives",
          "avgSal": "2.5L",
          "rating": 3
        },
        {
          "position": "Floor Managers",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Lobby Managers",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Supply Chain Distributor",
          "avgSal": "6L",
          "rating": 3.5
        }
      ],
    "Entrepreneurship":
      [
        {
          "position": "System Analyst",
          "avgSal": "6L",
          "rating": 3.5
        },
        {
          "position": "Trainee Telesales",
          "avgSal": "2.5L",
          "rating": 3
        },
        {
          "position": "Chief Human Resources Officer",
          "avgSal": "6L",
          "rating": 3.5
        },
        {
          "position": "Executive/Office Assistant",
          "avgSal": "5L",
          "rating": 3.5
        },
        {
          "position": "Finance Controller",
          "avgSal": "18L",
          "rating": 4
        }
      ],
    "Logistics Management":
      [
        {
          "position": "Shipping Coordinator",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Warehouse Supervisor",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Operations Manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Logistics Coordinator",
          "avgSal": "5L",
          "rating": 3
        },


      ],
    "Hospitality":
      [

        {
          "position": "Executive Trainee",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Guest Service Officer",
          "avgSal": "2L",
          "rating": 2
        },
        {
          "position": "Reservations Manager",
          "avgSal": "3.5L",
          "rating": 3
        },
        {
          "position": "Executive Search Consultant",
          "avgSal": "6L",
          "rating": 3
        },
        {
          "position": "Tour Booking Officer",
          "avgSal": "2L",
          "rating": 2
        }

      ],
    "Tourism":
      [
        {
          "position": "Lobby Manager",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Travel Executive",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Travel Coordinator",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Ticketing Executive",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Front Office",
          "avgSal": "3L",
          "rating": 2
        }
      ],
    "Import and Export Management":
      [
        {
          "position": "Foreign Trade Analyst",
          "avgSal": "9L",
          "rating": 3
        },
        {
          "position": "Export Manager",
          "avgSal": "6L",
          "rating": 3
        },
        {
          "position": "Relationship Manager",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Foreign Trade Manager",
          "avgSal": "6.5L",
          "rating": 3
        }
      ],
    "Sports Management":
      [
        {
          "position": "HR Manager",
          "avgSal": "7L",
          "rating": 3
        },
        {
          "position": "Event Manager",
          "avgSal": "4.5L",
          "rating": 3
        },
        {
          "position": "Finance Manager",
          "avgSal": "9L",
          "rating": 3
        },
        {
          "position": "PR Manager",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Sales Manager",
          "avgSal": "6.5L",
          "rating": 3
        }
      ],
    "Hospital & Healthcare":
      [
        {
          "position": "Catering Supervisor & Assistant",
          "avgSal": "5L",
          "rating": 3
        },
        {
          "position": "Catering Officer",
          "avgSal": "3.5L",
          "rating": 3
        },
        {
          "position": "Hospitality Executive",
          "avgSal": "3L",
          "rating": 2
        },
        {
          "position": "Cabin Crew",
          "avgSal": "6.5L",
          "rating": 3
        },
        {
          "position": "Sales Manager",
          "avgSal": "7.5L",
          "rating": 3.5
        }
      ],
    "Accounting":
      [
        {
          "position": "Chief Accounting Officer",
          "avgSal": "35L",
          "rating": 4.6
        },
        {
          "position": "Audit Manager",
          "avgSal": "16L",
          "rating": 4.2
        },
        {
          "position": "Tax Assistant",
          "avgSal": "4.5L",
          "rating": 3.5
        },
        {
          "position": "Finance Executive",
          "avgSal": "7.5L",
          "rating": 3.5
        },
        {
          "position": "Assistant Controller",
          "avgSal": "6.5L",
          "rating": 3.5
        }
      ],
    "Supply Chain":
      [
        {
          "position": "Warehouse Supervisors",
          "avgSal": "6.5L",
          "rating": 3.5
        },
        {
          "position": "Shipping Coordinator",
          "avgSal": "6.5L",
          "rating": 3.5
        },
        {
          "position": "Operations Manager",
          "avgSal": "6.5L",
          "rating": 3.5
        },
        {
          "position": "Export Sales Coordinator",
          "avgSal": "6.5L",
          "rating": 3.5
        },
        {
          "position": "Logistics Coordinator",
          "avgSal": "6.5L",
          "rating": 3.5
        }

      ],

    "Interior Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png",
        "headerBg": "linear-gradient(#e50000,#9a1a1a)"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Typically, <i>illustrations</i> are used by clients in publications including books, periodicals, websites, and adverts. Depending on the requirements and tastes of the client, they may work together to produce graphics.",

        "description": "<p>The duties in a career as an Illustrator are as follows –</p><ul><li> Illustrators meet with clients and project managers to discuss the specifications of a project. Illustrators first consult with a customer to go through the design and project specifications.</li><li>If they are employed by an organization, they might meet with a project manager or team lead to get instructions on their task.</li><li>The illustrator and client establish a deadline after considering the project’s specifics. With a timeline in hand, the illustrator can use it to finish the project’s various components.</li><li>Also, information about salary, due dates, and project agreements are negotiated by illustrators.</li><li>To help them produce the desired aesthetic results, they employ several tools. Typically, illustrators create sample illustrations to present to clients in order to gauge their approval of the work and identify any adjustments that may be required.</li><li>Depending on the client’s response, illustrators can make adjustments to the project at this stage and change the specifications for the artwork.</li><li>They conduct a study to better comprehend the specifics of a project. They can also conduct studies on the ideas and subjects related to the project, such as technical words or medical notions.</li><li>They might get more comments from the client about the item that they can use as a guide for future work.</li></ul><h3>Job roles for an Illustrator</h3><ul><li><h5>Product Illustrator:</h5><p>Product illustrators view their illustrations as a means of developing a completely distinct identity for a product and as a crucial component of the narrative that must be told for the product to succeed.</p></li><li><h5>Fashion Illustrator:</h5><p>Almost any illustration with an emphasis on clothing, accessories, or associated media falls under the umbrella of fashion illustration. The choice of artistic medium is typically decided by the designer, and fashion illustrators may utilize realistic depictions or more abstract sketches.</p></li></ul>",
        "skills": ["Unique Style", "Creativity", "Convincing", "Communication", "Visual library"],
        "career": ["Graphic Designing", "Advertising", "Product Design", "Book Design", "Architecture"],
        "topCourses": ["Bachelor of Fine Arts", "Bachelor of Visual Arts", "BA Illustrator", "UG Diploma in Animation & Illustration", "B.Sc in Graphics, Illustration, Web Design", "MFA", "MA Illustration", "M.Sc Visual Communication"],
        "recuiters": [
          {
            "companyName": "BigBook Designs",

          },
          {
            "companyName": "DataMatics",

          },
          {
            "companyName": "Geethik Technologies",

          },
          {
            "companyName": "Medlar Publishing Solutions",

          },
          {
            "companyName": "Pro Global Business Solutions",

          }
        ],
        "topColleges": [
          {
            "id": 1,
            "college": "NID (National Institute of Design)",
            "address": "",
            "city": ["Ahmedabad"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IDC, IIT Bombay",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          },
          {
            "id": 3,
            "college": "Pearl Academy, (Delhi, Mumbai, Jaipur)",
            "address": "",
            "city": ["Mumbai", "Delhi", "Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          },
          {
            "id": 4,
            "college": "NIFT, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          },
          {
            "id": 5,
            "college": "MAEER’S MIT Institute of Design, Pune",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          },
          {
            "id": 6,
            "college": "Srishti School of Art Design and Technology, (Bengaluru, Pune , Trivandrum)",
            "address": "",
            "city": ["Bengaluru", "Pune", "Trivandrum"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          },
          {
            "id": 7,
            "college": "Indian School of Design and Innovation, Mumbai",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],

          }
        ]
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png",
        "headerBg": "linear-gradient(#01ade3,#1a7b99)",
        "about": "Fashion Merchandisers oversee the style design of garments and accessories in retail clothing stores, costume suppliers, or fashion houses. It is the Fashion Merchandiser's responsibility to predict fashion trends, plan and implement store layouts, purchase apparel, and collaborate with designers."
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png",
        "headerBg": "linear-gradient(#01ade3,#1a7b99)",
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Fashion Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Fashion Merchandise": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Visual Merchandise": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Jewelry Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Product Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Furniture Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Industrial Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Graphic Design": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Color Consultancy": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "Fashion Consultancy": [
      {
        "id": "",
        "position": "Graphic Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Illustrator",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Fashion Merchandiser",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Costume Designer",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Textile Designers",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Fashion Forecasters",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Entrepreneurs",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Fashion Stylists",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Design Manager",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Color Consultant",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      }
    ],
    "B.Ed - Biological Science": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Ed - Mathmatics": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Ed - Home Science": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Ed - Political Science": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Ed - Computer Science": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Ed - Economics": [
      {
        "id": "",
        "position": "Central Goverment School Teacher",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card02.png"
      },
      {
        "id": "",
        "position": "School Assistant",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card05.png"
      },
      {
        "id": "",
        "position": "Post Graduate Teacher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card07.png"
      },
      {
        "id": "",
        "position": "Primary School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Elementry School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card06.png"
      },

      {
        "id": "",
        "position": "School Teacher",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card03.png"
      },
      {
        "id": "",
        "position": "Counsellor",
        "avgSal": "2.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Educational Administrator",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card08.webp"
      },
      {
        "id": "",
        "position": "Educational Researcher",
        "avgSal": "4.5L",
        "rating": 3.5,
        "image": "card09.png"
      },
      {
        "id": "",
        "position": "Online Tutor",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card01.png"
      },
      {
        "id": "",
        "position": "Content Writer",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card11.png"
      },
      {
        "id": "",
        "position": "Researcher",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Pharm - Bachelor (Pharmacy)": [
      {
        "id": "",
        "position": "Medical Writer",
        "avgSal": "3L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Clinical Research Associate",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",

        "position": "Drug Safety Associate",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Drug Inspector",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Pharmaceutical Scientist",
        "avgSal": "6.5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Formulation Development Associate",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Sales/ Marketing Executive",
        "avgSal": "4L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "Pharmacy Business",
        "avgSal": "8L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "",
        "position": "QA/QC Associate",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card04.png"
      }
    ],
    "B.Planning - Bachelor (Architecture)": [
      {
        "id": "1",
        "position": "Urban Planner",
        "avgSal": "5.5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Regional Planner",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Project Planner",
        "avgSal": "3.5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Design Architect",
        "avgSal": "3.5L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Interior Designer",
        "avgSal": "3.5L",
        "rating": 3,
        "image": "card04.png"
      }
    ],
    "B.Sc (Agriculture) - Bachelor (Agriculture)": [
      {
        "id": "1",
        "position": "Assistant Manager (Tea and Rubber Plantation)",
        "avgSal": "3.5L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Assistant Manager (Cocoa, Teak, Indigo, Tobacco, Jute and pepper plantation)",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Land Geomatics Surveyor",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Soil Forestry Officer",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Soil Quality Officer",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "6",
        "position": "Plant Breeder/Grafting expert",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "7",
        "position": "Seed/Nursery Manager",
        "avgSal": "4L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "8",
        "position": "Budding/Tissue culture expert",
        "avgSal": "3L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "9",
        "position": "Assistant Manager (Horticulture)",
        "avgSal": "3.5L",
        "rating": 3,
        "image": "card04.png"
      },
    ],
    "B.Sc (Medicine) - Bachelor (Medical)": [
      {
        "id": "1",
        "position": "Laboratory Assistant",
        "avgSal": "3.5L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Scientific Researcher",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Zoologist",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Botanist",
        "avgSal": "5L",
        "rating": 3.5,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Teaching Assistant",
        "avgSal": "2.5L",
        "rating": 2,
        "image": "card04.png"
      },
    ],
    "B.Sc (Nursing) - Bachelor (Paramedical)": [
      {
        "id": "1",
        "position": "Staff Nurse",
        "avgSal": "2.5L",
        "rating": 2,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Industrial Nurse",
        "avgSal": "3L",
        "rating": 2,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Military Nurse",
        "avgSal": "3L",
        "rating": 2,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Supervisor",
        "avgSal": "4L",
        "rating": 2.5,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Psychiatric Nurse",
        "avgSal": "6L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "6",
        "position": "Home care Nurses",
        "avgSal": "4L",
        "rating": 2.5,
        "image": "card04.png"
      },
      {
        "id": "7",
        "position": "Nursing executives",
        "avgSal": "4L",
        "rating": 2.5,
        "image": "card04.png"
      },
      {
        "id": "8",
        "position": "Junior Psychiatric Nurse",
        "avgSal": "3L",
        "rating": 2,
        "image": "card04.png"
      },
    ],
    "Accounts and Finance": [
      {
        "id": "1",
        "position": "Personal Financial Consultant",
        "avgSal": "10L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Financial Analyst",
        "avgSal": "6L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Accounts Manager",
        "avgSal": "3L",
        "rating": 3,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Money Manager",
        "avgSal": "8L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Senior Accountant",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    "Investment Management": [
      {
        "id": "1",
        "position": "Investment Analyst",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Finance Analyst",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Account Manager",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png"
      },
    ],
    "Financial Market": [
      {
        "id": "1",
        "position": "Financial Controller",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Finance Officer",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Insurance Manager",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Treasurer",
        "avgSal": "18L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Risk Managers",
        "avgSal": "10L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    "Statistics": [],
    "Tourism and Travel Management": [],
    "Banking and Finance": [
      {
        "id": "1",
        "position": "Accountant",
        "avgSal": "2.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Cashier",
        "avgSal": "2.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Insurance Manager",
        "avgSal": "6L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Loan Counselor",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Financial Advisor",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png"
      },
    ],
    // "Banking and Insurance": [],
    "E-Commerce": [
      {
        "id": "1",
        "position": "Marketing Manager",
        "avgSal": "10L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Budget Manager",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Finance Manager",
        "avgSal": "9L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Accountant",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png"
      },
    ],
    "Economics": [
      {
        "id": "1",
        "position": "Banking and Finance Officer",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Market Research Analyst",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Tax Experts",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    // "Banking and Insurance": [],
    "B.Com - Computer Applications": [
      {
        "id": "1",
        "position": "Auditor",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Computer Programmer",
        "avgSal": "8.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Business Consultant",
        "avgSal": "10L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Mobile App Developer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Business Analyst",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    "B.Com - Information Technology": [
      {
        "id": "1",
        "position": "Auditor",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Computer Programmer",
        "avgSal": "8.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Business Consultant",
        "avgSal": "10L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Mobile App Developer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Business Analyst",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    "B.Com - International Business": [
      {
        "id": "1",
        "position": "Accountant",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Business Analyst",
        "avgSal": "7.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Corporate/Government Relations Officer",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Financial Dealer and Broker",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "International Business Consultant",
        "avgSal": "7.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "6",
        "position": "Policy Advisor",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png"
      }
    ],
    "Accountancy": [
      {
        "id": "1",
        "position": "Accountancy teacher",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "2",
        "position": "Assistant branch manager",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "3",
        "position": "Accounts assistant",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "4",
        "position": "Current Account Portfolio Manager",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png"
      },
      {
        "id": "5",
        "position": "Accountant",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",

      }
    ],
    "Business Economics": [
      {
        "id": "1",
        "position": "Business Analytics Manager",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "The Business analytics manager can also be referred to as the Data analytics and insights manager. The manager deals with a team of business analysts, who take the help of data and statistics of the business and come up with the perception and awareness into the business routine so that they can bring about some changes leading to business advancements. The manager brings execution of the statistical outlook and ways to bring them forward.",
        "description": "",

        "recuiters": [
          {
            "companyName": "Government sectors",
          },
          {
            "companyName": "Indian Economic Services",
          },
          {
            "companyName": "Indian Civil Services",
          },
          {
            "companyName": "National Sample Survey",
          },
          {
            "companyName": "Reserve Bank of India",
          },
          {
            "companyName": "Planning Board",
          },
          {
            "companyName": "Ministry of Economic Affairs",
          },
          {
            "companyName": "Planning Commission",
          },
          {
            "companyName": "National Council for Applied Economic Research",
          },
          {
            "companyName": "National Institute of Public Finance and Policy",
          }
        ],
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Shivaji University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "DPG Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Ishwar Saran Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Jain University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Padmashri Vikhe Patil Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Kalinga University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Rashtrapita Mahatma Gandhi Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 9,
            "college": "BNN College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 10,
            "college": "Karnataka Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 11,
            "college": "VCB Education Society’s Arts & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "2",
        "position": "Marketing Analytics Manager",
        "avgSal": "7.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "The marketing analytics manager is a person who looks at the matter of how efficient any business firm’s marketing promotion is. They indulge into finding out the basic presentation hints, accumulating and studying facts and having it straightened for the successful promotion of the business firm. There are two types of Marketing Analysts: one, who has technical acquaintance as they know how to use the data they have extracted and second is those, understands marketing. Unlike the first ones, these second types of managers are less technical but possess great production skills and in building connections.",
        "description": "",
        "recuiters": [
          {
            "companyName": "Government sectors",
          },
          {
            "companyName": "Indian Economic Services",
          },
          {
            "companyName": "Indian Civil Services",
          },
          {
            "companyName": "National Sample Survey",
          },
          {
            "companyName": "Reserve Bank of India",
          },
          {
            "companyName": "Planning Board",
          },
          {
            "companyName": "Ministry of Economic Affairs",
          },
          {
            "companyName": "Planning Commission",
          },
          {
            "companyName": "National Council for Applied Economic Research",
          },
          {
            "companyName": "National Institute of Public Finance and Policy",
          }
        ],
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Shivaji University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "DPG Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Ishwar Saran Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Jain University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Padmashri Vikhe Patil Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Kalinga University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Rashtrapita Mahatma Gandhi Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 9,
            "college": "BNN College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 10,
            "college": "Karnataka Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 11,
            "college": "VCB Education Society’s Arts & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "3",
        "position": "Foreign Exchange Consultant",
        "avgSal": "8.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Foreign Exchange Consultant also refers to Forex Exchange Consultant. These people are concerned with the foreign trade and businesses and help the people who want to invest internationally. These consultants are responsible for figuring out the international market strategy and make suggestions accordingly. They exchange an individual’s money from one currency to other foreign currency.",
        "description": "",
        "recuiters": [
          {
            "companyName": "Government sectors",
          },
          {
            "companyName": "Indian Economic Services",
          },
          {
            "companyName": "Indian Civil Services",
          },
          {
            "companyName": "National Sample Survey",
          },
          {
            "companyName": "Reserve Bank of India",
          },
          {
            "companyName": "Planning Board",
          },
          {
            "companyName": "Ministry of Economic Affairs",
          },
          {
            "companyName": "Planning Commission",
          },
          {
            "companyName": "National Council for Applied Economic Research",
          },
          {
            "companyName": "National Institute of Public Finance and Policy",
          }
        ],
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Shivaji University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "DPG Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Ishwar Saran Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Jain University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Padmashri Vikhe Patil Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Kalinga University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Rashtrapita Mahatma Gandhi Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 9,
            "college": "BNN College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 10,
            "college": "Karnataka Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 11,
            "college": "VCB Education Society’s Arts & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "4",
        "position": "Health Economist",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Health economists are the people concerned with the giving out of supplies and help in maintaining health in the health care systems. They are allowed to work in two ways publicly as a healthcare worker or privately employed. These Economists are taught skills and given knowledge about healthcare in their study days that they utilize the same to study health in multiple work areas.",
        "description": "",
        "recuiters": [
          {
            "companyName": "Government sectors",
          },
          {
            "companyName": "Indian Economic Services",
          },
          {
            "companyName": "Indian Civil Services",
          },
          {
            "companyName": "National Sample Survey",
          },
          {
            "companyName": "Reserve Bank of India",
          },
          {
            "companyName": "Planning Board",
          },
          {
            "companyName": "Ministry of Economic Affairs",
          },
          {
            "companyName": "Planning Commission",
          },
          {
            "companyName": "National Council for Applied Economic Research",
          },
          {
            "companyName": "National Institute of Public Finance and Policy",
          }
        ],
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Shivaji University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "DPG Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Ishwar Saran Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Jain University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Padmashri Vikhe Patil Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Kalinga University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Rashtrapita Mahatma Gandhi Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 9,
            "college": "BNN College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 10,
            "college": "Karnataka Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 11,
            "college": "VCB Education Society’s Arts & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "5",
        "position": "Assistant Manager",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Business always runs smoother when a manager has an assistant to rely on. The assistant manager ensures operational excellence by performing managerial tasks, such as scheduling, maintaining inventory, and/or evaluating employee performance.",
        "description": "",
        "recuiters": [
          {
            "companyName": "Government sectors",
          },
          {
            "companyName": "Indian Economic Services",
          },
          {
            "companyName": "Indian Civil Services",
          },
          {
            "companyName": "National Sample Survey",
          },
          {
            "companyName": "Reserve Bank of India",
          },
          {
            "companyName": "Planning Board",
          },
          {
            "companyName": "Ministry of Economic Affairs",
          },
          {
            "companyName": "Planning Commission",
          },
          {
            "companyName": "National Council for Applied Economic Research",
          },
          {
            "companyName": "National Institute of Public Finance and Policy",
          }
        ],
        "topColleges": [

          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Shivaji University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "DPG Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Ishwar Saran Degree College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Jain University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Padmashri Vikhe Patil Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Kalinga University",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Rashtrapita Mahatma Gandhi Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 9,
            "college": "BNN College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 10,
            "college": "Karnataka Arts, Science & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 11,
            "college": "VCB Education Society’s Arts & Commerce College",
            "address": "",
            "city": [""],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      }
    ],
    "Foreign Trade Management": [
      {
        "id": "1",
        "position": "Business Analyst",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Conduct market analyses for both the product line as well as for the overall profitability of the firm. They also outline the various opportunities and problems with respect to business while working on different aspects including pricing, forecasting and budgeting",
        "description": "",

      },
      {
        "id": "2",
        "position": "International Trade manager",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Designing and implementing the strategies for the successful exchange of goods and services at the global level"
      },
      {
        "id": "3",
        "position": "International Market Analyst",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Helps the firms and organisations to decide what products and services to sell at the international level by conduct research and analysis for determining the exact demand"
      },
      {
        "id": "4",
        "position": "Financial Advisor",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Providing advice to clients, firms and organisations on how to manage their money towards the goal of sustainability and profitability."
      },
      {
        "id": "5",
        "position": "Accountant",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "about": "Maintain and update the records of assets, liabilities, debt, loan and everything pertaining to the financial aspect of the business."
      },


    ],
    "BSc IT": [

    ],
    "Hotel Management": [],
    "Aeronautical Science": [
      {
        "id": "1",
        "position": "Airline Pilot",
        "avgSal": "8.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Airline Pilots perform the task of determining risks having a chance of occurring during the flight proceedings, ensuring safety and security of passengers travelling on board while communicating with required personnel and agencies.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Srinivas University",
            "address": "",
            "city": ["Mangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "The Bombay Flying Club's College of Aviation",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Indian Institute of Aircraft Engineering",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jamia Millia Islamia",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Wingsss College of Aviation Technology",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Nehru College of Aeronautics and Applied Science",
            "address": "",
            "city": ["Coimbatore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Defense services",
          },
          {
            "companyName": "Indian Space Research Organization (ISRO)",
          },
       
        ]
        
      },
      {
        "id": "2",
        "position": "Air Traffic Controller",
        "avgSal": "5.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "An Air Traffic Controller is appointed to monitor the direction of the flight or the moving aircraft towards the ground or in the air. They are also held responsible for issuing landing and take-off instructions to the pilots.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Srinivas University",
            "address": "",
            "city": ["Mangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "The Bombay Flying Club's College of Aviation",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Indian Institute of Aircraft Engineering",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jamia Millia Islamia",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Wingsss College of Aviation Technology",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Nehru College of Aeronautics and Applied Science",
            "address": "",
            "city": ["Coimbatore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Defense services",
          },
          {
            "companyName": "Indian Space Research Organization (ISRO)",
          },
       
        ]
        
      },
      {
        "id": "3",
        "position": "Aircraft Maintenance and Technical",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "They are made responsible for maintaining the cleanliness of the aircraft after landing and few hours before take-off irrespective of the timings.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Srinivas University",
            "address": "",
            "city": ["Mangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "The Bombay Flying Club's College of Aviation",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Indian Institute of Aircraft Engineering",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jamia Millia Islamia",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Wingsss College of Aviation Technology",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Nehru College of Aeronautics and Applied Science",
            "address": "",
            "city": ["Coimbatore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Defense services",
          },
          {
            "companyName": "Indian Space Research Organization (ISRO)",
          },
       
        ]
        
      },
      {
        "id": "4",
        "position": "Flight Engineer",
        "avgSal": "22L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Flight Engineers are appointed to assist with pre-flight navigation preparations and conduct check points ensuring work is done in orderly fashion simultaneously interpreting flight-related gauges and instruments.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Srinivas University",
            "address": "",
            "city": ["Mangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "The Bombay Flying Club's College of Aviation",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Indian Institute of Aircraft Engineering",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jamia Millia Islamia",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Wingsss College of Aviation Technology",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Nehru College of Aeronautics and Applied Science",
            "address": "",
            "city": ["Coimbatore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Defense services",
          },
          {
            "companyName": "Indian Space Research Organization (ISRO)",
          },
       
        ]
        
      },
      {
        "id": "5",
        "position": "Airline Director",
        "avgSal": "35L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Airline Directors are posed as decision-makers and policy-makers for the airport authorities. They are responsible for supervising the managers and staff along with maintaining accurate records, planning budgets, working with community leaders and overseeing the maintenance and repair of airport equipment.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Srinivas University",
            "address": "",
            "city": ["Mangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "The Bombay Flying Club's College of Aviation",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Indian Institute of Aircraft Engineering",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jamia Millia Islamia",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Wingsss College of Aviation Technology",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Nehru College of Aeronautics and Applied Science",
            "address": "",
            "city": ["Coimbatore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Defense services",
          },
          {
            "companyName": "Indian Space Research Organization (ISRO)",
          },
       
        ]
        
      },
    ],
    "Actuarial Science": [
      {
        "id": "1",
        "position": "Actuary",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "All the financial related activities are handled by actuary as they analyze and also try to suggest the risks involved in the financial sector. They are usually found to be working in insurance sectors and pension programms.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
        
      },
      {
        "id": "2",
        "position": "Budget Analysts",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Accountable for analyzing budgets that need to be invested in different departments. They help both public and private industries in organizing and maintaining their finances with the help of budget analysis. ",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]

      },
      {
        "id": "3",
        "position": "Economists",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Economists are responsible for analyzing the market trends and suggest proper ways of investment by doing a lot of market research. Also responsible for collecting and analyzing data of goods and services and evaluating economic issues.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "4",
        "position": "Cost Estimators",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "They estimate the total cost involved in any project. They also take care of the date, time and the number of laborers that are required to complete an assigned task. They estimate cost considering all the aspects. The cost of materials and the money required to construct a building, product, or for providing any service are estimated by cost estimators. ",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "5",
        "position": "Mathmaticians",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Mathematicians are responsible for researching, understanding and developing mathematical principles required for any project.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "6",
        "position": "Insurance Underwriters",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#9a1a1a,#e50000)",
        "about": "Crucial for any organization. They are accountable for deciding whether to provide insurance service or not to the clients. They study the insurance policies and decide any kind of grant of insurance after going through all the terms and conditions that are provided by the company.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
      {
        "id": "7",
        "position": "Auditors and Accountants",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#98561b,#e46d00)",
        "about": "They do audits of all the funds that have been released by the organization to different departments. They examine and prepare all financial records and statements. They are responsible for maintaining all financial records and ensuring that all the taxes are paid in time.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Lovely Professional University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Jalandhar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Chandigrah University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "University of Petroleum and energy Studies",
            "address": "",
            "city": ["Dehradun"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ]
      },
    ],
    "Anthropology": [
      {
        "id": "1",
        "position": "Anthropologist",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "An anthropologist is a person engaged in the practice and study of aspects of humans within past and present societies. They are scientists who study the development and behavior of human beings throughout the world. Anthropologists examine biological, archaeological, linguistic or sociocultural traditions, depending on their area of expertise.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "2",
        "position": "Archaeologist",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Archaeology is a branch of socio-cultural anthropology, where archaeologists draw from biological, geological, and environmental systems through their study of the past. It is the study of human activity through the recovery and analysis of material culture.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "3",
        "position": "Historic Buildings Inspector",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Historic Buildings Inspector advises on and promotes the conservation of historic buildings, structures, and areas of special historic, architectural, or artistic interest.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "4",
        "position": "Archaeological Field Technician",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "They are responsible for conducting the majority of the fieldwork involved in archaeological investigations like Conducting surveys, Excavation, Artifact identification and/or collection, Photography, Collecting soil samples, etc.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "5",
        "position": "Field Investigator",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "A field investigator performs interviews and observations on a given situation to determine the nature of what is happening for a client and the company. Field investigators aka private investigators perform surveillance and research for a corporation, law enforcement agency, or individual clients.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "6",
        "position": "Forensic Anthropologist",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Forensic Anthropology is the study of old bones to determine age, sex, and medical history, along with other identification factors, of deceased persons. Students from both Bachelor's and Master's degrees in anthropology are required in order for the position.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "7",
        "position": "Economic Anthropologist",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Economic anthropology is a field where the professional attempts to explain human economic behavior in its widest historic, geographic and cultural scope.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
      {
        "id": "8",
        "position": "Conservation Officer",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Conservative Officers enforce state and federal laws protecting natural resources, mainly fish and wildlife. They are police officers who are often certified to enforce other laws, such as motor vehicle laws and controlled substance statutes, within their jurisdiction.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Hansraj College",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Amity University",
            "address": "",
            "city": ["Noida"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "National College, LU",
            "address": "",
            "city": ["Lucknow"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Pragjyotish College",
            "address": "",
            "city": ["Guwahati"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "BJB College",
            "address": "",
            "city": ["Bhubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "NIMS University",
            "address": "",
            "city": ["Jaipur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Museums",
          },
          {
            "companyName": "Research Centres",
          },
          {
            "companyName": "Archaeological sites",
          },
          {
            "companyName": "Universities",
          },
          {
            "companyName": "Heritage centres",
          },
          {
            "companyName": "Art Galleries",
          },
          {
            "companyName": "Market Research companies",
          },
          {
            "companyName": "Non-governmental organisations",
          },
          {
            "companyName": "Governmental organisations",
          },
        ]
        
      },
    ],
    "Biological Science": [],
    "Physics": [],
    "Mathematics": [],
    "Geology": [],
    "Software Engineering": [],
    "Anatomy": [
      {
        "id": "1",
        "position": "Medical transcriptionist",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The duty of an Exercise Physiologist is to listen to voice recordings that physicians make and convert them into written documents. They review and edit the medical reports using technology.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Rama University",
            "address": "",
            "city": ["Kanpur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Adesh University",
            "address": "",
            "city": ["Bathinda"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Baba Farid University of Health Sciences",
            "address": "",
            "city": ["Faridkot"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Sri Guru Ram Das University of Health Sciences",
            "address": "",
            "city": ["Amritsar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Cipla",
          },
          {
            "companyName": "Fortis",
          },
          {
            "companyName": "Kauvery Hospital",
          },
          {
            "companyName": "Cadila Healthcare",
          },
          {
            "companyName": "AIIMS",
          },
          {
            "companyName": "biomedical research laboratories",
          },
          {
            "companyName": "applied arts and science institutions",
          },
        ]
        
      },
      {
        "id": "2",
        "position": "Configuration analyst",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The duty of the Configuration analyst is to help in manufacturing software to ensure the development of products. They develop a solution by taking care of budgets.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Rama University",
            "address": "",
            "city": ["Kanpur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Adesh University",
            "address": "",
            "city": ["Bathinda"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Baba Farid University of Health Sciences",
            "address": "",
            "city": ["Faridkot"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Sri Guru Ram Das University of Health Sciences",
            "address": "",
            "city": ["Amritsar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Cipla",
          },
          {
            "companyName": "Fortis",
          },
          {
            "companyName": "Kauvery Hospital",
          },
          {
            "companyName": "Cadila Healthcare",
          },
          {
            "companyName": "AIIMS",
          },
          {
            "companyName": "biomedical research laboratories",
          },
          {
            "companyName": "applied arts and science institutions",
          },
        ]
        
      },
      {
        "id": "3",
        "position": "Pharmaceutical scientist",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The duty of Pharmaceutical scientists is to research to drive drug discovery, testing and development. They are bench level scientists; they execute experiments taking project aim as introducing new drugs.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Rama University",
            "address": "",
            "city": ["Kanpur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Adesh University",
            "address": "",
            "city": ["Bathinda"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Baba Farid University of Health Sciences",
            "address": "",
            "city": ["Faridkot"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Sri Guru Ram Das University of Health Sciences",
            "address": "",
            "city": ["Amritsar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Cipla",
          },
          {
            "companyName": "Fortis",
          },
          {
            "companyName": "Kauvery Hospital",
          },
          {
            "companyName": "Cadila Healthcare",
          },
          {
            "companyName": "AIIMS",
          },
          {
            "companyName": "biomedical research laboratories",
          },
          {
            "companyName": "applied arts and science institutions",
          },
        ]
        
      },
      {
        "id": "4",
        "position": "Anatomist",
        "avgSal": "4.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The duty of an anatomist is to study and research the structure of living beings. They focus on neuroscience, endocrinology, microscopy, etc.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Rama University",
            "address": "",
            "city": ["Kanpur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Adesh University",
            "address": "",
            "city": ["Bathinda"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Baba Farid University of Health Sciences",
            "address": "",
            "city": ["Faridkot"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Sri Guru Ram Das University of Health Sciences",
            "address": "",
            "city": ["Amritsar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Cipla",
          },
          {
            "companyName": "Fortis",
          },
          {
            "companyName": "Kauvery Hospital",
          },
          {
            "companyName": "Cadila Healthcare",
          },
          {
            "companyName": "AIIMS",
          },
          {
            "companyName": "biomedical research laboratories",
          },
          {
            "companyName": "applied arts and science institutions",
          },
        ]      
      },
      {
        "id": "5",
        "position": "Demonstrator",
        "avgSal": "6.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The duty of the demonstrator is to oversee students doing the research and experiments. They use practical equipment, conduct experiments, workshops, and answer issues to students.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Chandigarh University",
            "address": "",
            "city": ["Chandigrah"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Rama University",
            "address": "",
            "city": ["Kanpur"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Jain University",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Adesh University",
            "address": "",
            "city": ["Bathinda"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Baba Farid University of Health Sciences",
            "address": "",
            "city": ["Faridkot"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Sri Guru Ram Das University of Health Sciences",
            "address": "",
            "city": ["Amritsar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Mumbai University",
            "address": "",
            "city": ["Mumbai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Cipla",
          },
          {
            "companyName": "Fortis",
          },
          {
            "companyName": "Kauvery Hospital",
          },
          {
            "companyName": "Cadila Healthcare",
          },
          {
            "companyName": "AIIMS",
          },
          {
            "companyName": "biomedical research laboratories",
          },
          {
            "companyName": "applied arts and science institutions",
          },
        ]      
      },
    ],
    "Applied Chemistry": [
      {
        "id": "1",
        "position": "Toxicologist",
        "avgSal": "4L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "A toxicologist is responsible for researching the adverse effects on living species with chemicals.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
        
      },
      {
        "id": "2",
        "position": "Pharmaceutical Sales Executive",
        "avgSal": "2.45L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The point of communication between clients and a pharmaceutical firm is the Pharmaceutical Sales Executive. They serve a business and generate information among future customers about drugs and medicines.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
        
      },
      {
        "id": "3",
        "position": "Lab Assistant",
        "avgSal": "2.45L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Lab assistants are usually employed in the labs of hospitals, pharmaceutical firms, and academic institutions. Their job is to help with laboratory research.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
      {
        "id": "4",
        "position": "Analytical Chemist",
        "avgSal": "2.45L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Analytical chemists practitioners analyze chemical substances and their composition and are usually employed in a lab.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
      {
        "id": "5",
        "position": "Clinical Laboratory Technologist",
        "avgSal": "2.45L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Medical Laboratory Technologists conduct detailed experiments, research, and sample examinations in hospitals or other clinical conditions.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
      {
        "id": "6",
        "position": "Chemist",
        "avgSal": "2.45L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "The primary role of a chemist is to study how various chemicals react to each other and to produce medications, cosmetics, and other products for everyday use.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
      {
        "id": "7",
        "position": "Pharma Assistant",
        "avgSal": "1.8L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "A Pharma Assistant serves a pharmacy firm with its administrative activities.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
      {
        "id": "8",
        "position": "Clinical Research Associate",
        "avgSal": "3L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "It is the responsibility of a Clinical Research Associate to manage the compilation, dissemination, and preservation of data collected during clinical research trials.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Dr MGR Educational and Research Institute, Chennai",
            "address": "",
            "city": ["Chennai"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "Centurion University of Technology and Management, Bubaneswar",
            "address": "",
            "city": ["Bubaneswar"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Chandigarh University, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "Jain University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "IITT Institutions, Chandigarh",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Premier College of Arts, Commerce, Science and Management Studies, Raigarh",
            "address": "",
            "city": ["Raigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "Punjab University",
            "address": "",
            "city": ["Chandigarh"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "HNBG University",
            "address": "",
            "city": ["CGarhwal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Manipal University",
            "address": "",
            "city": ["Manipal"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Bharath petroleum",
          },
          {
            "companyName": "Indian Oil Corporation",
          },
          {
            "companyName": " ISRO",
          },
          {
            "companyName": "Bhabha Atomic research Centre",
          },
          {
            "companyName": "Indian Railway sector",
          },
          {
            "companyName": " ONGC",
          },
        
        ]
      },
    ],
    "B.Sc. Statistics": [],
    "Clinical Nutrition": [],
    // "Economics":[],
    "Environmental Science": [],
    "B.Sc. Food Technology": [],
    "Geography": [],
    "Microbiology": [],
    "Nautical Science": [],
    "Physiotherapy": [],
    "BSc Forestry": [],
    "Chemistry": [],
    "Biology": [],
    "Bio-Chemistry": [],
    "Bio-Technology": [],
    "PCM": [],
    "PCB": [],
    "Botany": [],
    "B.Sc. Computer Applications": [
      {
        "id": "1",
        "position": "Website Developer",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
        
      },
      {
        "id": "2",
        "position": "Mobile App Developer",
        "avgSal": "3.5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
        
      },
      {
        "id": "3",
        "position": "UI/UX Developer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
        
      },
      {
        "id": "3",
        "position": "UI/UX Developer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
      },
      {
        "id": "4",
        "position": "IT Supervisor",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
      },
      {
        "id": "5",
        "position": "Computer Programmer",
        "avgSal": "6L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
      },
      {
        "id": "6",
        "position": "Computer Operator",
        "avgSal": "6L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "IBM",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
        ]
      },
    ],
    "B.Sc. Computer Science": [
      {
        "id": "1",
        "position": "Software Engineer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]
        
      },
      {
        "id": "2",
        "position": "Website Developer",
        "avgSal": "5L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]
        
      },
      {
        "id": "3",
        "position": "Mobile App Developer",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "4",
        "position": "UI/UX Developer",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "5",
        "position": "IT Supervisor",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "6",
        "position": "Network Engineer",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "7",
        "position": "Software Tester",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "8",
        "position": "Technical Writer",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "9",
        "position": "Software Quality Assurance (SQA) Tester",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
      {
        "id": "10",
        "position": "System Administrator",
        "avgSal": "7L",
        "rating": 4,
        "image": "card04.png",
        "headerBg": "linear-gradient(#e46d00,#98561b)",
        "about": "Technology that we use in our everyday lives stems from the innovative ideas of cutting-edge professionals. The jobs for B.Sc Computer Application graduates are not just available in India but are also available abroad. Many graduates working with top MNC's are offered transfers abroad. Graduates can also do certificate courses or gain higher education to increase their chances of getting a job abroad. The Computer science field provides ample opportunities for students to pursue their career abroad.",
        "description":"",
        "topColleges": [
          {
            "id": 1,
            "college": "Ambedkar Institute of Technology, Delhi",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 2,
            "college": "IGNOU Delhi - Indira Gandhi National Open University",
            "address": "",
            "city": ["New Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 3,
            "college": "Aliah University, Kolkata",
            "address": "",
            "city": ["Kolkata"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 4,
            "college": "JNU Delhi - Jawaharlal Nehru University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 5,
            "college": "Savitribai Phule Pune University",
            "address": "",
            "city": ["Pune"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 6,
            "college": "Marian College, Kuttikkanam",
            "address": "",
            "city": ["Kuttikkanam"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 7,
            "college": "GGSIPU Delhi - Guru Gobind Singh Indraprastha University",
            "address": "",
            "city": ["Delhi"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
          {
            "id": 8,
            "college": "Allahabad University - University of Allahabad Allahabad",
            "address": "",
            "city": ["Prayagraj"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },  
          {
            "id": 9,
            "college": "Christ University, Bangalore",
            "address": "",
            "city": ["Bangalore"],
            "district": "",
            "zipCode": "",
            "contact": "",
            "email": "",
            "logo": "",
            "courses": [],
          },
        ],
        "recuiters": [
          {
            "companyName": "Google",
          },
          {
            "companyName": "Microsoft",
          },
          {
            "companyName":"Tech Mahindra"
          },
          {
            "companyName":"IBM"
          },
          {
            "companyName":"Deloitte"
          },
          {
            "companyName": "CGI",
          },
          {
            "companyName": "Wipro",
          },
          {
            "companyName": "Cognizant",
          },
          {
            "companyName": "Infosys",
          },
          {
            "companyName": "Accenture",
          },
          {
            "companyName": "Adobe",
          },
          {
            "companyName": "Oracle",
          },
          {
            "companyName": "TCS",
          },
          {
            "companyName": "Micromax",
          },
       
        ]  
      },
    ],
    "Electronics": [],
    "Food Sciences": [],
    "Forensic Sciences": [],
    "Home Science": [],
    "Instrumentation": [],
    "Optometry": [],
    "Physiology": [],
    "Psychology": [],
  }];
  constructor() { }
  getCareerOportunity() {
    return this.careerOpotunity;
  }
  getSubjectList() {
    return this.subjectList;
  }
}
