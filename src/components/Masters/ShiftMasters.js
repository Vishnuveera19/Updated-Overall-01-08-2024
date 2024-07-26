import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TextField, Button, Card, Typography, Box, Grid, CardContent, 
  FormControl, InputLabel, FormHelperText 
} from '@mui/material';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { PAYMBRANCHES, PAYMCOMPANIES, SHIFTDETAILS } from '../../serverconfiguration/controllers';
import { ServerConfig } from '../../serverconfiguration/serverconfig';

const ShiftMasters = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [companyid, setCompanyid] = useState("");
  const [branchid, setBranchid] = useState("");
  const [shiftCode, setShiftCode] = useState("");
  const [startTime, setStartTime] = useState("");
  const [breakTimeIn, setBreakTimeIn] = useState("");
  const [breakTimeOut, setBreakTimeOut] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shiftIndicator, setShiftIndicator] = useState("");

  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [shiftCodeError, setShiftCodeError] = useState(false);
  const [startTimeError, setStartTimeError] = useState(false);
  const [breakTimeInError, setBreakTimeInError] = useState(false);
  const [breakTimeOutError, setBreakTimeOutError] = useState(false);
  const [endTimeError, setEndTimeError] = useState(false);
  const [shiftIndicatorError, setShiftIndicatorError] = useState(false);

  useEffect(() => {
    async function getData() {
      const companyData = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(companyData.data);

      const branchData = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(branchData.data);
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'pnCompanyId':
        setCompanyid(value);
        setCompanyError(false);
        break;
      case 'pnBranchId':
        setBranchid(value);
        setBranchError(false);
        break;
      case 'ShiftCode':
        setShiftCode(value);
        setShiftCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(value) || !value);
        break;
      case 'shiftIndicator':
        setShiftIndicator(value);
        setShiftIndicatorError(!/^[A-Za-z0-9\s]{1,12}$/.test(value) || !value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!companyid);
    setBranchError(!branchid);

    setShiftCodeError(!/^[A-Za-z0-9\s]{1,20}$/.test(shiftCode));
    setShiftIndicatorError(!/^[A-Za-z0-9\s]{1,12}$/.test(shiftIndicator));

    if (companyError || branchError || shiftCodeError || shiftIndicatorError) {
      return;
    }

    const formData = {
      pnCompanyid: companyid,
      pnBranchid: branchid,
      shiftCode: shiftCode,
      startTime: startTime,
      breakTimeOut: breakTimeOut,
      breakTimeIn: breakTimeIn,
      endTime: endTime,
      shiftIndicator: shiftIndicator,
    };

    try {
      await postRequest(ServerConfig.url, SHIFTDETAILS, formData);
      navigate('/ShiftDetailsTable');
    } catch (error) {
      console.log(error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>
              Shift Detail
            </Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={companyError}>
                    <InputLabel shrink>Company</InputLabel>
                    <select
                      name="pnCompanyId"
                      value={companyid}
                      onChange={handleChange}
                      style={{ height: '50px' }}
                    >
                      <option value="">Select</option>
                      {company.map((e) => <option key={e.pnCompanyId} value={e.pnCompanyId}>{e.pnCompanyId}</option>)}
                    </select>
                    {companyError && <FormHelperText style={{ color: 'red' }}>Please select a company</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={branchError}>
                    <InputLabel shrink>Branch</InputLabel>
                    <select
                      name="pnBranchId"
                      value={branchid}
                      onChange={handleChange}
                      style={{ height: '50px' }}
                    >
                      <option value="">Select</option>
                      {branch.map((e) => <option key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</option>)}
                    </select>
                    {branchError && <FormHelperText style={{ color: 'red' }}>Please select a branch</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={shiftCodeError}>
                    <InputLabel shrink>ShiftCode</InputLabel>
                    <TextField
                      name="ShiftCode"
                      value={shiftCode}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                    {shiftCodeError && <FormHelperText style={{ color: 'red' }}>Invalid Shift Code</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={startTimeError}>
                    <InputLabel shrink>StartTime</InputLabel>
                    <TextField
                      name="StartTime"
                      type="datetime-local"
                    
                      onChange={(e) => setStartTime(e.target.value)}
                      variant="outlined"
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={breakTimeInError}>
                    <InputLabel shrink>BreakTimeIn</InputLabel>
                    <TextField
                      name="BreakTimeIn"
                      type="datetime-local"
                     
                      onChange={(e) => setBreakTimeIn(e.target.value)}
                      variant="outlined"
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={breakTimeOutError}>
                    <InputLabel shrink>BreakTimeOut</InputLabel>
                    <TextField
                      name="BreakTimeOut"
                      type="datetime-local"
                    
                      onChange={(e) => setBreakTimeOut(e.target.value)}
                      variant="outlined"
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={endTimeError}>
                    <InputLabel shrink>EndTime</InputLabel>
                    <TextField
                      name="EndTime"
                      type="datetime-local"
                    
                      onChange={(e) => setEndTime(e.target.value)}
                      variant="outlined"
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={shiftIndicatorError}>
                    <InputLabel shrink>ShiftIndicator</InputLabel>
                    <TextField
                      name="shiftIndicator"
                      value={shiftIndicator}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                    {shiftIndicatorError && <FormHelperText style={{ color: 'red' }}>Invalid Shift Indicator</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1} paddingTop={'20px'}>
                <Grid item xs={12} align="right">
                  <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
                  <Button type="submit" variant='contained' color='primary'>SAVE</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default ShiftMasters;