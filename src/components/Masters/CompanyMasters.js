import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    CardContent
  } from '@mui/material';
  import { useState } from 'react';
  
  import { PAYMCOMPANIES } from '../../serverconfiguration/controllers';
  import { postRequest } from '../../serverconfiguration/requestcomp';
  import { ServerConfig } from '../../serverconfiguration/serverconfig';
  import { useNavigate } from 'react-router-dom';
  
  const CompanyForm01 = () => {
    const navigate = useNavigate();
    const [CompanyCode, setCompanyCode] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [faxNo, setFaxNo] = useState('');
    const [emailId, setEmailId] = useState('');
    const [alternateEmailId, setAlternateEmailId] = useState('');
    const [status, setStatus] = useState('');
    const [pfno, setPfno] = useState('');
    const [esino, setEsino] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
  
    const [CompanyCodeError, setCompanyCodeError] = useState(false);
    const [CompanyNameError, setCompanyNameError] = useState(false);
    const [addressLine1Error, setAddressLine1Error] = useState(false);
    const [addressLine2Error, setAddressLine2Error] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [phoneNoError, setPhoneNoError] = useState(false);
    const [faxNoError, setFaxNoError] = useState(false);
    const [emailIdError, setEmailIdError] = useState(false);
    const [alternateEmailIdError, setAlternateEmailIdError] = useState(false);
    const [statusError, setStatusError] = useState(false);
    const [pfnoError, setPfnoError] = useState(false);
    const [esinoError, setEsinoError] = useState(false);
    const [startDateError, setStartDateError] = useState(false);
    const [endDateError, setEndDateError] = useState(false);
  
  
    const margin={margin:"0 5px"}
  
   
  
    
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      switch (name) {
        case 'companyCode':
          setCompanyCode(value);
          setCompanyCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
          break;
        case 'CompanyName':
          setCompanyName(value);
          setCompanyNameError(!/^[A-Za-z0-9\s]{1,50}$/.test(value) || !value);
          break;
        case 'addressLine1':
          setAddressLine1(value);
          setAddressLine1Error(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(value) || !value);
          break;
        case 'addressLine2':
          setAddressLine2(value);
          setAddressLine2Error(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(value) || !value);
          break;
        case 'city':
          setCity(value);
          setCityError(!/^[A-Za-z0-9\s]{1,100}$/.test(value) || !value);
          break;
        case 'zipCode':
          setZipCode(value);
          setZipCodeError(!/^[/-{}.,A-Za-z0-9\s]{1,50}$/.test(value) || !value);
          break;
        case 'country':
          setCountry(value);
          setCountryError(!/^[A-Za-z0-9\s]{1,100}$/.test(value) || !value);
          break;
        case 'state':
          setState(value);
          setStateError(!/^[A-Za-z0-9\s]{1,100}$/.test(value) || !value);
          break;
        case 'phoneNo':
          const phoneNumber = value.replace(/\D/g, '');
          setPhoneNo(value);
          setPhoneNoError(phoneNumber.length !== 10);
          break;
        case 'faxNo':
          const faxNoPattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
          setFaxNo(value)
          setFaxNoError(!faxNoPattern.test(value));
          break;
        case 'emailId':
          setEmailId(value.trim());
          setEmailIdError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
          break;
        case 'alternateEmailId':
          setAlternateEmailId(value.trim());
          setAlternateEmailIdError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
          break;
        case 'status':
          setStatus(value);
          setStatusError(!/^[A-Za-z\s]{1}$/.test(value) || !value);
          break;
        case 'pfno':
          setPfno(value);
          setPfnoError(!/^[A-Za-z0-9\s]{5,10}$/.test(value) || !value);
          break;
        case 'esino':
          setEsino(value);
          setEsinoError(!/^\d{10,17}$/.test(value) || !value);
          break;
        case 'startDate':
          setStartDate(value);
          setStartDateError(!value);
          break;
        case 'endDate':
          setEndDate(value);
          setEndDateError(!value);
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setCompanyCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(CompanyCode) || !CompanyCode);
      setCompanyNameError(!/^[A-Za-z0-9\s]{1,50}$/.test(CompanyName) || !CompanyName);
      setAddressLine1Error(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(addressLine1) || !addressLine1);
      setAddressLine2Error(!/^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(addressLine2) || !addressLine2);
      setCityError(!/^[A-Za-z0-9\s]{1,100}$/.test(city) || !city);
      setZipCodeError(!/^[/-{}.,A-Za-z0-9\s]{1,50}$/.test(zipCode) || !zipCode);
      setCountryError(!/^[A-Za-z0-9\s]{1,100}$/.test(country) || !country);
      setStateError(!/^[A-Za-z0-9\s]{1,100}$/.test(state) || !state);
      setPhoneNoError(phoneNo.replace(/\D/g, '').length !== 10);
      setFaxNoError(!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(faxNo));
      setEmailIdError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId));
      setAlternateEmailIdError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alternateEmailId));
     
      setStatusError(!/^[A-Za-z\s]{1}$/.test(status) || !status);
      setPfnoError(!/^[A-Za-z0-9\s]{20}$/.test(pfno) || !pfno);
      setEsinoError(!/^\d{10,17}$/.test(esino) || !esino);
      setStartDateError(!startDate);
      setEndDateError(!endDate);
  
      if (
      
        /^[A-Za-z0-9\s]{1,20}$/.test(CompanyCode) &&
        /^[A-Za-z0-9\s]{1,50}$/.test(CompanyName) &&
        /^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(addressLine1) &&
        /^[/-{}(),.A-Za-z0-9\s]{1,100}$/.test(addressLine2) &&
        /^[A-Za-z0-9\s]{1,100}$/.test(city) &&
        /^[/-{}.,A-Za-z0-9\s]{1,50}$/.test(zipCode) &&
        /^[A-Za-z0-9\s]{1,100}$/.test(country) &&
        /^[A-Za-z0-9\s]{1,100}$/.test(state) &&
        phoneNo.replace(/\D/g, '').length === 10 &&
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/(faxNo) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId) &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alternateEmailId) &&
        /^[A-Za-z\s]{1}$/.test(status) &&
        /^[A-Za-z0-9\s]{20}$/.test(pfno) &&
        /^\d{10,17}$/.test(esino) &&
        startDate &&
        endDate
      ) {
        const formData= ({
          pnCompanyId:0,
          CompanyCode:'',
          CompanyName:'',
          addressLine1:'',
          addressLine2:'',
          city:'',
          zipCode:'',
          country:'',
          state:'',
          phoneNo:'',
          faxNo:'',
          emailId:'',
          alternateEmailId:'',
          pfno:'',
          esino:'',
          startDate:'',
          endDate:''
      
        });
  
        try {
          console.log('Form data:', formData);
          const response = await postRequest(ServerConfig.url, PAYMCOMPANIES, formData);
          if (response.status === 200 || response.status === 201) {
            console.log('Data saved successfully!');
            navigate('/PaycompanyTable');
          } else {
            console.error('Error saving data:', response.statusText);
            console.error('Server validation errors:', response);
          }
      
          
        } catch (error) {
          console.error('Error saving data:', error);
        }
      }
    };
  
  
    return (
      <Grid container justifyContent="center">
        <Grid item xs={12}  >
          <Card style={{ padding: 20 }} sx={{maxWidth:"1200px"}}>
            <CardContent sx={{maxWidth:"1200px"}}>
              <Typography variant='h5' color='textPrimary' align='center' gutterBottom>
                PAYMCOMPANY Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
              
                <Grid item xs={12} sm={3}>              
                <TextField
                    fullWidth
                    label="companyCode"
                    name="companyCode"
                 
                    onChange={handleChange}
                    error={CompanyCodeError}
                    helperText={CompanyCodeError && "Please enter branch code"}
                  />
                </Grid>
                
                {/** Continue for other input fields similarly **/}
  
                <Grid item xs={12} sm={3}>              
                <TextField
                    fullWidth
                    label="CompanyName"
                    name="CompanyName"
                   
                    onChange={handleChange}
                    error={CompanyNameError}
                    helperText={CompanyNameError && "Please enter  branch name"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>              
                <TextField
                    fullWidth
                    label="Address Line 1"
                    name="addressLine1"
                    value={addressLine1}
                    onChange={handleChange}
                    error={addressLine1Error}
                    helperText={addressLine1Error && "Please enter  address"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3} >
                  <TextField
                    fullWidth
                    label="Address Line 2"
                    name="addressLine2"
                    value={addressLine2}
                    onChange={handleChange}
                    error={addressLine2Error}
                    helperText={addressLine2Error && "Please enter  address"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>              
                <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    error={cityError}
                    helperText={cityError && "Please enter  city"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>              
                <TextField
                    fullWidth
                    label="Zip Code"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleChange}
                    error={zipCodeError}
                    helperText={zipCodeError && "Please enter  zip code"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3} >
                  <TextField
                    fullWidth
                    label="Country"
                    name="country"
                    value={country}
                    onChange={handleChange}
                    error={countryError}
                    helperText={countryError && "Please enter  country"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={state}
                    onChange={handleChange}
                    error={stateError}
                    helperText={stateError && "Please enter state"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={handleChange}
                    error={phoneNoError}
                    helperText={phoneNoError && "Please enter only 10 digits  number"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Fax Number"
                    name="faxNo"
                    value={faxNo}
                    onChange={handleChange}
                    error={faxNoError}
                    helperText={faxNoError && "Please enter fax number"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    name="emailId"
                    value={emailId}
                    onChange={handleChange}
                    error={emailIdError}
                    helperText={emailIdError && "Please enter  email ID"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Alternate Email ID"
                    name="alternateEmailId"
                    value={alternateEmailId}
                    onChange={handleChange}
                    error={alternateEmailIdError}
                    helperText={alternateEmailIdError && "Please enter alternate email ID"}
                  />
                </Grid>
                
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Status"
                    name="status"
                    value={status}
                    onChange={handleChange}
                    error={statusError}
                    helperText={statusError && "Please enter  status"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="PF No"
                    name="pfno"
                    value={pfno}
                    onChange={handleChange}
                    error={pfnoError}
                    helperText={pfnoError && "Please enter  PF number"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="ESI No"
                    name="esino"
                    value={esino}
                    onChange={handleChange}
                    error={esinoError}
                    helperText={esinoError && "Please enter  ESI number"}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Start Date"
                    name="startDate"
                    value={startDate}
                    onChange={handleChange}
                    error={startDateError}
                    helperText={startDateError && "Please select  start date"}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    type="date"
                    label="End Date"
                    name="endDate"
                    value={endDate}
                    onChange={handleChange}
                    error={endDateError}
                    helperText={endDateError && "Please select end date"}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
  
  
                  
                  </Grid>
              
                  <Grid container spacing={1} paddingTop={'10px'}>
            
            <Grid item xs ={12} align="right" >
              <Button style={margin} type="reset" variant='outlined' color='primary' >RESET</Button>
              <Button onClick={()=>{
  
  
                
              }}  
      variant='contained' color='primary' >SAVE</Button>
            </Grid>
            </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };
  
  export default CompanyForm01;