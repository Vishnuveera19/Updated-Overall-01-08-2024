import {
  Grid,
  Card,
  TextField,
  Button,
  Typography,
  Box,FormHelperText,
  CardContent,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  PAYMEMPLOYEE,
  PAYMCOMPANIES,
  PAYMBRANCHES,
} from "../../serverconfiguration/controllers";
import { getRequest, postRequest } from "../../serverconfiguration/requestcomp";
import { InputLabel } from "@mui/material";
import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { useNavigate } from "react-router-dom";

export default function PaymEmployeeMasters() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [empEarnings, setEmpEarnings] = useState([]);
  const [pnBranchId, setPnBranchId] = useState("");
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnEmployeeId, setEmployeeId] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeFirstName, setEmployee_First_Name] = useState("");
  const [employeeMiddleName, setEmployee_Middle_Name] = useState("");
  const [employeeLastName, setEmployee_Last_Name] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [status, setstatus] = useState("");
  const [employeeFullName, setEmployee_Full_Name] = useState("");
  const [readerid, setReaderid] = useState("");
  const [otEligible, setOT_Eligible] = useState("");
  const [pfno, setPfno] = useState("");
  const [esino, setEsino] = useState("");
  const [otCalc, setOT_calc] = useState("");
  const [ctc, setCTC] = useState("");
  const [basicSalary, setbasic_salary] = useState("");
  const [bankCode, setBank_code] = useState("");
  const [bankName, setBank_Name] = useState("");
  const [branchName, setBranch_Name] = useState("");
  const [accountType, setAccount_Type] = useState("");
  const [micrCode, setMICR_code] = useState("");
  const [ifscCode, setIFSC_Code] = useState("");
  const [address, setAddress] = useState("");
  const [otherInfo, setOther_Info] = useState("");
  const [reportingPerson, setReporting_person] = useState("");
  const [reportingId, setReportingID] = useState("");
  const [reportingEmail, setReporting_email] = useState("");
  const [panNo, setPan_no] = useState("");
  const [cardNo, setcard_no] = useState("");
  const [salaryType, setsalary_type] = useState("");
  const [tdsApplicable, setTDS_Applicable] = useState("");
  const [flag, setFlag] = useState("");
  const [role, setrole] = useState("");

  
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [pnBranchIdError, setPnBranchIdError] = useState(false);
  const [pnCompanyIdError, setPnCompanyIdError] = useState(false);
  const [pnEmployeeIdError, setEmployeeIdError] = useState(false);
  const [employeeCodeError, setEmployeeCodeError] = useState(false);
  const [employeeFirstNameError, setEmployee_First_NameError] = useState(false);
  const [employeeMiddleNameError, setEmployee_Middle_NameError] = useState(false);
  const [employeeLastNameError, setEmployee_Last_NameError] = useState(false);
  const [dateofBirthError, setDateofBirthError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [statusError, setstatusError] = useState(false);
  const [employeeFullNameError, setEmployee_Full_NameError] = useState(false);
  const [readeridError, setReaderidError] = useState(false);
  const [otEligibleError, setOT_EligibleError] = useState(false);
  const [pfnoError, setPfnoError] = useState(false);
  const [esinoError, setEsinoError] = useState(false);
  const [otCalcError, setOT_calcError] = useState(false);
  const [ctcError, setCTCError] = useState(false);
  const [basicSalaryError, setbasic_salaryError] = useState(false);
  const [bankCodeError, setBank_codeError] = useState(false);
  const [bankNameError, setBank_NameError] = useState(false);
  const [branchNameError, setBranch_NameError] = useState(false);
  const [accountTypeError, setAccount_TypeError] = useState(false);
  const [micrCodeError, setMICR_codeError] = useState(false);
  const [ifscCodeError, setIFSC_CodeError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [otherInfoError, setOther_InfoError] = useState(false);
  const [reportingPersonError, setReporting_personError] = useState(false);
  const [reportingIdError, setReportingIDError] = useState(false);
  const [reportingEmailError, setReporting_emailError] = useState(false);
  const [panNoError, setPan_noError] = useState(false);
  const [cardNoError, setcard_noError] = useState(false);
  const [salaryTypeError, setsalary_typeError] = useState(false);
  const [tdsApplicableError, setTDS_ApplicableError] = useState(false);
  const [flagError, setFlagError] = useState(false);
  const [roleError, setroleError] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data2 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data2.data);
    }
    getData();
  }, []);
  const validateIFSC = (value) => {
    const ifscCode = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscCode.test(value) ? '' : 'Invalid IFSC Code. It should be 11 characters long, start with 4 letters, followed by 0, and end with 6 alphanumeric characters.';
  };
  
  const validatePAN = (value) => {
    const panNo = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
    return panNo.test(value) ? '' : 'Invalid PAN Number. It should be a 10-character alphanumeric string with the first five characters as letters, the next four as digits, and the last character as a letter.';
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'pnCompanyId':
        setCompany(value);
        setCompanyError(false);
        break;
      case 'pnBranchId':
        setBranch(value);
        setBranchError(false);
        break;
  
      case 'employeeCode':
        setEmployeeCode(value);
        setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'employeeFirstName':
        setEmployee_First_Name(value);
        setEmployee_First_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'employeeMiddleName':
        setEmployee_Middle_Name(value);
        setEmployee_Middle_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'employeeLastName':
        setEmployee_Last_Name(value);
        setEmployee_Last_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'password':
        setPassword(value);
        setPasswordError(!/^[-@/_A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'gender':
        setGender(value);
        setGenderError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'status':
        setstatus(value);
        setstatusError(!/^[A-Za-z\s]{1}$/.test(value) || !value);
        break;
      case 'employeeFullName':
        setEmployee_Full_Name(value);
        setEmployee_Full_NameError(!/^[_.,/-A-Za-z0-9\s]{1,70}$/.test(value) || !value);
        break;
      case 'readerid':
        setReaderid(value);
        setReaderidError(!/^\d+$/.test(value) || !value);
        break;
      case 'otEligible':
        setOT_Eligible(value);
        setOT_EligibleError(!/^[A-Za-z\s]{1}$/.test(value) || !value);
        break;
      case 'pfno':
        setPfno(value);
        setPfnoError(!/^[A-Za-z0-9\s]{5,10}$/.test(value) || !value);
        break;
      case 'esino':
        setEsino(value);
        setEsinoError(!/^\d{10,17}$/.test(value) || !value);
        break;
      case 'otCalc':
        setOT_calc(value);
        setOT_calcError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'ctc':
        setCTC(value);
        setCTCError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'basicSalary':
        setbasic_salary(value);
        setbasic_salaryError(!/^\d+(\.\d+)?$/.test(value) || !value);
        break;
      case 'bankCode':
        setBank_code(value);
        setBank_codeError(!/^[A-Za-z0-9\s]{1,10}$/.test(value) || !value);
        break;
      case 'bankName':
        setBank_Name(value);
        setBank_NameError(!/^[A-Za-z0-9\s]{1,30}$/.test(value) || !value);
        break;
      case 'branchName':
        setBranch_Name(value);
        setBranch_NameError(!/^[A-Za-z0-9\s]{1,30}$/.test(value) || !value);
        break;
      case 'accountType':
        setAccount_Type(value);
        setAccount_TypeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'micrCode':  
        setMICR_code(value);
        setMICR_codeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'ifscCode':
        setIFSC_Code(value.toUpperCase()); // Ensure uppercase for consistency
        const ifscError = validateIFSC(value.toUpperCase());
        setIFSC_CodeError(ifscError);
        break;
      case 'address':
        setAddress(value);
        setAddressError(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(value) || !value);
        break;
      case 'otherInfo':
        setOther_Info(value);
        setOther_InfoError(!/^[A-Za-z0-9\s]{1,100}$/.test(value) || !value);
        break;
      case 'reportingPerson':
        setReporting_person(value);
        setReporting_personError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
        break;
      case 'reportingId':
        setReportingID(value);
        setReportingIDError(!/^\d+$/.test(value) || !value);
        break;
      case 'reportingEmail':
        setReporting_email(value.trim());
        setReporting_emailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        break;
      case 'panNo':
        setPan_no(value.toUpperCase()); // Ensure uppercase for consistency
        const panError = validatePAN(value.toUpperCase());
        setPan_noError(panError);
        break;
      case 'cardNo':
        setcard_no(value);
        setcard_noError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'salaryType':
        setsalary_type(value);
        setsalary_typeError(!/^[A-Za-z0-9\s]{1,5}$/.test(value) || !value);
        break;
      case 'tdsApplicable':
        setTDS_Applicable(value);
        setTDS_ApplicableError(!/^[A-Za-z\s]{1}$/.test(value) || !value);
        break;
      case 'flag':
        setFlag(value);
        setFlagError(!/^[A-Za-z\s]{1}$/.test(value) || !value);
        break;
      case 'role':
        setrole(value);
        setroleError(!/^\d+$/.test(value) || !value);
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setCompanyError(!company);
    setBranchError(!branch);
    setEmployeeCodeError(!/^[A-Za-z0-9\s]{1,50}$/.test(employeeCode) || !employeeCode);
    setEmployee_First_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(employeeFirstName) || !employeeFirstName);
    setEmployee_Middle_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(employeeMiddleName) || !employeeMiddleName);
    setEmployee_Last_NameError(!/^[A-Za-z0-9\s]{1,50}$/.test(employeeLastName) || !employeeLastName);
    setPasswordError(!/^[-@/_A-Za-z0-9\s]{1,20}$/.test(password) || !password);
    setGenderError(!/^[A-Za-z0-9\s]{1,20}$/.test(gender) || !gender);
    setstatusError(!/^[A-Za-z\s]{1}$/.test(status) || !status);
    setEmployee_Full_NameError(!/^[_.,/-A-Za-z0-9\s]{1,70}$/.test(employeeFullName) || !employeeFullName);
    setReaderidError(!/^\d+$/.test(readerid) || !readerid);
    setOT_EligibleError(!/^[A-Za-z\s]{1}$/.test(otEligible) || !otEligible);
    setroleError(!/^\d+$/.test(role) || !role);
    setFlagError(!/^[A-Za-z\s]{1}$/.test(flag) || !flag);
    setTDS_ApplicableError(!/^[A-Za-z\s]{1}$/.test(tdsApplicable) || !tdsApplicable);
    setsalary_typeError(!/^[A-Za-z0-9\s]{1,5}$/.test(salaryType) || !salaryType);
    setcard_noError(!/^[A-Za-z0-9\s]{1,20}$/.test(cardNo) || !cardNo);
    setPan_noError(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNo) || !panNo);
    setReporting_emailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reportingEmail));
    setReportingIDError(!/^\d+$/.test(reportingId) || !reportingId);
    setReporting_personError(!/^[A-Za-z0-9\s]{1,50}$/.test(reportingPerson) || !reportingPerson);
    setOther_InfoError(!/^[A-Za-z0-9\s]{1,100}$/.test(otherInfo) || !otherInfo);
    setAddressError(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(address) || !address);
    setIFSC_CodeError(!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode) || !ifscCode);
    setPfnoError(!/^[A-Za-z0-9\s]{5,10}$/.test(pfno) || !pfno);
    setEsinoError(!/^\d{10,17}$/.test(esino) || !esino);
    setOT_calcError(!/^\d+(\.\d+)?$/.test(otCalc) || !otCalc);
    setCTCError(!/^\d+(\.\d+)?$/.test(ctc) || !ctc);
    setbasic_salaryError(!/^\d+(\.\d+)?$/.test(basicSalary) || !basicSalary);
    setBank_codeError(!/^[A-Za-z0-9\s]{1,10}$/.test(bankCode) || !bankCode);
    setBank_NameError(!/^[A-Za-z0-9\s]{1,30}$/.test(bankName) || !bankName);
    setBranch_NameError(!/^[A-Za-z0-9\s]{1,30}$/.test(branchName) || !branchName);
    setAccount_TypeError(!/^[A-Za-z0-9\s]{1,20}$/.test(accountType) || !accountType);
    setMICR_codeError(!/^[A-Za-z0-9\s]{1,20}$/.test(micrCode) || !micrCode);
  
  

  if (!company || !branch || !employeeCode || !status ||
    !employeeFirstName || !employeeMiddleName || !employeeLastName ||
    !password || !gender || !status || !employeeFullName || !readerid ||
    !otEligible || !pfno || !esino || !otCalc || !ctc || !basicSalary ||
    !bankCode || !bankName || !branchName || !accountType || !micrCode ||
    !ifscCode || !address || !otherInfo || !reportingPerson || !reportingId ||
    !reportingEmail || !panNo || !cardNo || !salaryType || !tdsApplicable || !flag || !role) {
  return;
}

const formData = {
  pnCompanyId: pnCompanyId,
  pnBranchId: pnBranchId,
  pnEmployeeId: pnEmployeeId,
  employeeCode: employeeCode,
  employeeFirstName: employeeFirstName,
  employeeMiddleName: employeeMiddleName,
  employeeLastName: employeeLastName,
  dateofBirth: dateofBirth,
  password: password,
  gender: gender,
  status: status,
  employeeFullName: employeeFullName,
  readerid: readerid,
  otEligible: otEligible,
  pfno: pfno,
  esino: esino,
  otCalc: otCalc,
  ctc: ctc,
  basicSalary: basicSalary,
  bankCode: bankCode,
  bankName: bankName,
  branchName: branchName,
  accountType: accountType,
  micrCode: micrCode,
  ifscCode: ifscCode,
  address: address,
  otherInfo: otherInfo,
  reportingPerson: reportingPerson,
  reportingId: reportingId,
  reportingEmail: reportingEmail,
  panNo: panNo,
  cardNo: cardNo,
  salaryType: salaryType,
  tdsApplicable: tdsApplicable,
  flag: flag,
  role: role,
};

try {
  await postRequest(ServerConfig.url, PAYMEMPLOYEE, formData);
  navigate('/PaymEmpTable');
} catch (error) {
  console.error('Error submitting form:', error);
}
}


;
  const margin = { margin: "0 5px" };
  return (
    <div>
      <Grid style={{ padding: "80px 5px0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h5" color="S- Light" align="center">
              Paym Employee
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Company</InputLabel>
                    <select
                      name="pnCompanyId"
                      onChange={handleChange}

                      style={{ height: "50px" }}>
                      <option value="">Select</option>
                      {company.map((e) => (
                        <option>{e.pnCompanyId}</option>
                      ))}
                    </select>
                    {companyError && <FormHelperText sx={{color:'red'}}>Please select a company</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <InputLabel shrink>BranchId</InputLabel>
                    <select
                      name="pnBranchId"
                      onChange={handleChange}

                      style={{ height: "50px" }}
                      inputlabelprops={{ shrink: true }}>
                      <option value="">Select</option>
                      {branch
                        .filter((e) => e.pnCompanyId == pnCompanyId)
                        .map((e) => (
                          <option>{e.pnBranchId}</option>
                        ))}
                    </select>
                    {pnBranchIdError && <FormHelperText sx={{color:'red'}}>Please select a branch</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="employeeCode"
                      label="employeeCode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                {employeeCodeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="employeeFirstName"
                      label="employeeFirstName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                {employeeFirstNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="employeeMiddleName"
                      label="employeeMiddleName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                  {employeeMiddleNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="employeeLastName"
                      label="employeeLastName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                  {employeeLastNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="dateofBirth"
                      label="dateofBirth"
                      variant="outlined"
                      fullWidth
                      required
                      type="DATETIME-LOCAL"
                      onChange={handleChange}
                    />
                  {employeeCodeError && <FormHelperText sx={{color:'red'}}>Please select dateofBirth</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="password"
                      label="password"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                    {passwordError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="gender"
                      label="gender"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {genderError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {statusError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="employeeFullName"
                      label="employeeFullName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {employeeFullNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="readerid"
                      label="readerid"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {readeridError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="otEligible"
                      label="otEligible"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {otEligibleError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="pfno"
                      label="pfno"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {pfnoError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="esino"
                      label="esino"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {esinoError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="otCalc"
                      label="otCalc"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {otCalcError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="ctc"
                      label="ctc"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {ctcError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="basicSalary"
                      label="basicSalary"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {basicSalaryError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="bankCode"
                      label="bankCode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {bankCodeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="bankName"
                      label="bankName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {bankNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="branchName"
                      label="branchName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                   {branchNameError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="accountType"
                      label="accountType"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {accountTypeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="micrCode"
                      label="micrCode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {micrCodeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
      <FormControl fullWidth>
        <TextField
          name="ifscCode"
          label="IFSC Code"
          variant="outlined"
          fullWidth
          required
          value={ifscCode}
          onChange={handleChange}
        />
                        {ifscCodeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

      </FormControl>
    </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="address"
                      label="address"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {addressError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="otherInfo"
                      label="otherInfo"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {otherInfoError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="reportingPerson"
                      label="reportingPerson"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {reportingPersonError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="reportingId"
                      label="reportingId"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {readeridError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="reportingEmail"
                      label="reportingEmail"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {reportingEmailError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
      <FormControl fullWidth>
        <TextField
          name="panNo"
          label="PAN Number"
          variant="outlined"
          fullWidth
          required
          value={panNo}
          onChange={handleChange}
          error={!!panNoError} // Convert error string to boolean
          helperText={panNoError}
        />
                        {panNoError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

      </FormControl>
    </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cardNo"
                      label="cardNo"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {cardNoError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="salaryType"
                      label="salaryType"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {salaryTypeError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="tdsApplicable"
                      label="tdsApplicable"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {tdsApplicableError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="flag"
                      label="flag"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {flagError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="role"
                      label="role"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={handleChange}
                    />
                                    {roleError && <FormHelperText sx={{color:'red'}}>Please enter values</FormHelperText>}

                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1} paddingTop={"10px"}>
                <Grid item xs={12} align="right">
                  <Button
                    style={margin}
                    type="reset"
                    variant="outlined"
                    color="primary">
                    RESET
                  </Button>
                  <Button
                    onClick={() => {
                     
                    }}
                    variant="contained"
                    color="primary">
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}