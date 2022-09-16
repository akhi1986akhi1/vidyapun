export class TblJobPostingEnvelope {
  results: TblJobPosting[];
  totalCount: number;
}

export class TblJobPosting
{
	recNo: any;
	title: string;
	reportTo: any;
	reportBy: any;
	jobObjective: any;
	keyResultArea: any;
	functionalArea: any;
	jobDescription: any;
	keywords: any;
	workMinExperience: any;
	workMaxExperience: any;
	annaulCTCMin: any;
	annaulCTCMax: any;
	vacancyNo: any;
	jobCityID: any;
	jobCityName: any;
	jobStateID: any;
	jobStateName: any;
	industrySubTypeID: any;
	industrySubTypeName: any;
	UGQualification: any;
	PGQualification: any;
	PhdQualification: any;
	employmentType: any;
	jobType: any;
	companyName: any;
	aboutUs: any;
	website: any;
	contactPerson: any;
	address: any;
	contactNo: any;
	emailID: any;
	suggestedCompany: any;
	suggestedIndustry: any;
	startDate: any;
	endDate: any;
	postingDate: any;
	creationDate: any;
  
  
    /**
     * Constructor
     *
     * @param Stream
     */
    constructor(tblJobPosting?)
    {
		if(tblJobPosting !=  null)
		{
			
			
			this.recNo = tblJobPosting.recNo || '0';
			this.title = tblJobPosting.title || '';
			this.reportTo = tblJobPosting.reportTo || '';
			this.reportBy = tblJobPosting.reportBy || '';
			this.jobObjective = tblJobPosting.jobObjective || '';
			this.keyResultArea = tblJobPosting.keyResultArea || '';
			this.functionalArea = tblJobPosting.functionalArea || '';
			this.jobDescription = tblJobPosting.jobDescription || '';
			this.keywords = tblJobPosting.keywords || '';
			this.workMinExperience = tblJobPosting.workMinExperience || '';
			this.workMaxExperience = tblJobPosting.workMaxExperience || '';
			this.annaulCTCMin = tblJobPosting.annaulCTCMin || '';
			this.annaulCTCMax = tblJobPosting.annaulCTCMax || '';
			this.vacancyNo = tblJobPosting.vacancyNo || '';
			this.jobCityID = tblJobPosting.jobCityID || '';
			this.jobCityName = tblJobPosting.jobCityName || '';
			this.jobStateID = tblJobPosting.jobStateID || '';
			this.jobStateName = tblJobPosting.jobStateName || '';
			this.industrySubTypeID = tblJobPosting.industrySubTypeID || '';
			this.UGQualification = tblJobPosting.UGQualification || '';
			this.PGQualification = tblJobPosting.PGQualification || '';
			this.PhdQualification = tblJobPosting.PhdQualification || '';
			this.employmentType = tblJobPosting.employmentType || '';
			this.jobType = tblJobPosting.jobType || '';
			this.companyName = tblJobPosting.companyName || '';
			this.aboutUs = tblJobPosting.aboutUs || '';
			this.website = tblJobPosting.website || '';
			this.contactPerson = tblJobPosting.contactPerson || '';
			this.address = tblJobPosting.address || '';
			this.contactNo = tblJobPosting.contactNo || '';
			this.emailID = tblJobPosting.emailID || '';
			this.suggestedCompany = tblJobPosting.suggestedCompany || '';
			this.suggestedIndustry = tblJobPosting.suggestedIndustry || '';
			this.startDate = tblJobPosting.startDate || '';
			this.endDate = tblJobPosting.endDate || '';
			this.postingDate = tblJobPosting.postingDate || '';
			this.creationDate = tblJobPosting.creationDate || '';
		}
    }
}

