import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';

import { Container, Row, Col, Alert,InputGroup, InputGroupAddon, Input } from 'reactstrap';
// import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
// import useForm from 'react-hook-form';
import InputControl, { INPUT_TYPE } from "./components/InputControl";
import FullScreenAlert, {ALERT_ENUM} from "./components/FullScreenAlert";
import {useForm} from "react-hook-form";

// import InputControl, { INPUT_TYPE } from '../../common/inputControl.component';
// import FullscreenAlert, {ALERT_ENUM} from "../../common/fullscreenAlert.component";


// import {
//     useCreateUserMutation,
//     useCountriesQuery,
//     useCheckDomainMutation,
// } from '../../../graphql/types';
// import history from "../../../misc/history";
// import { createBrowserHistory } from
// import withAuthorization from "../../common/withAuthorization.component";

interface Props {
    // location: Location
}

const Registration: React.FC<Props> = props => {
    const { register,
        handleSubmit ,
        errors,
        setError,
        clearErrors,
        // clearError,
        watch,

        // triggerValidation
    } = useForm();


    // const [error2, setError2] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [countries, setCountries] = useState(
    //     new Array<{
    //         name: string,
    //         topLevelDomain: string[];
    //         alpha2Code: string;
    //         alpha3Code: string;
    //         callingCodes: string[];
    //         capital: string;
    //         altSpellings: string[];
    //         region: string;
    //         subregion: string;
    //         population: number;
    //         latlng: number[];
    //         demonym: string;
    //         area: number;
    //         gini?: number;
    //         timezones: string[];
    //         borders: string[];
    //         nativeName: string;
    //         numericCode: string;
    //         // currencies: Currency[];
    //         currencies: {
    //             code: string;
    //             name: string;
    //             symbol: string;
    //         };
    //         // languages: Language[];
    //         languages: {
    //             iso639_1: string;
    //             iso639_2: string;
    //             name: string;
    //             nativeName: string;
    //         };
    //
    //         translations: {
    //             de: string;
    //             es: string;
    //             fr: string;
    //             ja: string;
    //             it: string;
    //             br: string;
    //             pt: string;
    //             nl: string;
    //             hr: string;
    //             fa: string;
    //         };
    //         flag: string;
    //         regionalBlocs: {
    //             acronym: string;
    //             name: string;
    //             otherAcronyms: any[];
    //             otherNames: string[];
    //         };
    //         message: string,
    //         status: number,
    //
    //
    //         cioc: string;
    //     }>()
    // );

    const [countries, setCountries] = useState(
        new Array<{
            name: string,

        }>()
    );



    // const [createUser,
    //     {data: createUserResponse = {}, loading, error: gqlError = { message: "" }}]
    //     = useCreateUserMutation();
    // const [ checkDomain ] = useCheckDomainMutation();
    //
    // const { data: countryData = { countries: [] } } = useCountriesQuery();

    const onSubmit = (data: any) => {
        // createUser({
        //     variables: {
        //         ...data
        //     }
        // }).then(response => {
        //     console.log("response", response);
        // });
        console.log("data", data);
    };

    const companyDomainWatcher = watch('domain');


    useEffect(() => {

        const getCountries = async () => {


            // const url = `https://restcountries.eu/rest/v2/capital/${routeContextInTabs.inputString}`;

            const url =`https://restcountries.eu/rest/v2/all?fields=name`;

            // console.log("url: ===> ===> ===> ===> ", url);

            fetch(url)
                // fetch (`https://restcountries.eu/rest/v2/capital/${routeContextInTabs.inputString}`, {
                //     method: 'POST',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json',
                //     },


                // })
                .then(res => res.json())
                .then(
                    (result) => {
                        // setError(null);
                        setIsLoaded(true);
                        setCountries(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.

                ).catch((error2)=>{
                setIsLoaded(true);
                // setError(error2);
                setCountries([]);

            });

        };

        // const checkValid = async () => {
        //     if (companyDomainWatcher){
        //         return await triggerValidation({ name: 'domain', value: companyDomainWatcher })
        //     }
        //     return false;
        // };
        // checkValid().then((isValid: boolean) => {
        //     if (isValid){
        //         checkDomain({
        //             variables: {
        //                 domain: companyDomainWatcher
        //             }
        //         }).then(()=> {
        //             clearError("domain");
        //         }).catch(e => {
        //             setError("domain", "serverError", e.message);
        //         })
        //     }
        // });

        getCountries();
    },[
        // companyDomainWatcher

    ]);


    //deps -> hooks


    // load countries.
   // const countries = countryData.countries ? countryData.countries.map((ele: any) => ({ label: ele.name, value: ele.id })) : [];


    console.log(`errors: --- line# 208: ${errors} `);


    console.log(`A => ${Object.values(errors)}`);
    console.log(`B => ${Object.keys(errors)}`);


    console.log(`C => ${Object.values(errors)}`);

    return (
        <div className="root-child">
            <Container>
                <Row>
                    {/*<pre>{JSON.stringify(errors.password, null, 4)}</pre>*/}
                    {/*<pre>{JSON.stringify(errors.confirmPassword && errors.confirmPassword.type, null, 4)}</pre>*/}
                    {/*<pre>{JSON.stringify(errors.domain && errors.domain.type, null, 4)}</pre>*/}
                    <Col xl="8 mx-auto">
                        {
                            // Object.keys(createUserResponse).length > 0 ? (
                            (!errors) ? (
                                <FullScreenAlert
                                    isLoading={false}
                                    type={ALERT_ENUM.SUCCESS}
                                    title="Verify your email"
                                    subTitle="To continue Please verify your email first"
                                    /*
                                    actions={[{
                                        title: "Login",
                                        clickHandler: () => history.back()


                                            // history.push("/login")
                                    }]}
                                    */


                                />
                            ) : (
                                <div className="card-flat wrapper-item-activation">
                                    <div className="">
                                        <h3
                                            // className="text-center text-left py-2"
                                            className="text-left py-2"
                                            style={{
                                                // color: 'green'
                                                // color: 'chartreuse',
                                                color: 'greenyellow',
                                                // color: 'lime',

                                            }}>Account</h3>

                                        <form

                                            name="formLogin"
                                            style={{

                                                // padding: "15px"
                                                paddingTop: "15px",
                                                paddingBottom: "15px",

                                            }}
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <Row>


                                                {/*<InputGroup size="lg">*/}
                                                {/*    <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>*/}
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.TEXT}
                                                        name="name"
                                                        placeholder="Full Name"
                                                        icon="fa-user-tie"
                                                        // icon ="fa-camera-retro"
                                                        error={errors.name}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                    />
                                                </Col>

                                                    {/*<Input />*/}
                                                {/*</InputGroup>*/}
                                                {/*<br />*/}

                                                {/*<Col xl="6">*/}
                                                {/*    <InputControl*/}
                                                {/*        inputType={INPUT_TYPE.TEXT}*/}
                                                {/*        name="name"*/}
                                                {/*        placeholder="Full Name"*/}
                                                {/*        icon="fa fa-user-tie"*/}
                                                {/*        error={errors.name}*/}
                                                {/*        formRef={register({*/}
                                                {/*            required: 'Required',*/}
                                                {/*        })}*/}
                                                {/*    />*/}
                                                {/*</Col>*/}

                                                    {/*<input type="text" className="form-control" aria-label="Small"*/}
                                                    {/*       aria-describedby="inputGroup-sizing-sm">*/}
                                                {/*</div>*/}

                                                    {/*<div className="input-group-prepend">*/}
                                                    {/*    <span className="input-group-text" id="basic-addon1">@</span>*/}
                                                        <Col xl="6">
                                                        <InputControl
                                                            inputType={INPUT_TYPE.TEXT}
                                                            name="name"
                                                            placeholder="Full Name"
                                                            icon="faCoffee"
                                                            iconProp2 ="faCoffee"
                                                            // icon ="fa-camera-retro"
                                                            error={errors.name}
                                                            formRef={register({
                                                                required: 'Required',
                                                            })}
                                                        />
                                                        </Col>
                                                    {/*</div>*/}


                                                {/*<Col xl="6">*/}
                                                {/*    <InputControl*/}
                                                {/*        inputType={INPUT_TYPE.TEXT}*/}
                                                {/*        name="username"*/}
                                                {/*        placeholder="Username"*/}
                                                {/*        icon="fa fa-user-tie"*/}
                                                {/*        error={errors.username}*/}
                                                {/*        formRef={register({*/}
                                                {/*            required: 'Required',*/}
                                                {/*        })}*/}
                                                {/*    />*/}
                                                {/*</Col>*/}
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.EMAIL}
                                                        name="email"
                                                        placeholder="Email Address"
                                                        icon="fa fa-envelope"
                                                        error={errors.email}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                    />
                                                </Col>
                                                {/*<Col xl="6">*/}
                                                {/*    <InputControl*/}
                                                {/*        inputType={INPUT_TYPE.TEL}*/}
                                                {/*        name="phone"*/}
                                                {/*        placeholder="Phone"*/}
                                                {/*        icon="fa fa-phone-square"*/}
                                                {/*        error={errors.phone}*/}
                                                {/*        formRef={register({*/}
                                                {/*            required: 'Required',*/}
                                                {/*        })}*/}
                                                {/*    />*/}
                                                {/*</Col>*/}
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.PASSWORD}
                                                        name="password"
                                                        placeholder="Password"
                                                        icon="fa fa-lock"
                                                        error={errors.password}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                    />
                                                </Col>
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.PASSWORD}
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        icon="fa fa-lock"
                                                        error={errors.confirmPassword}
                                                        formRef={register({
                                                            required: 'Required',
                                                            validate: (value) => {
                                                                const isValid = value === watch('password');
                                                                if (!isValid){
                                                                    /*
                                                                    setError([

                                                                        {
                                                                            name: "password",
                                                                            message: "The password and confirm password mot matched",
                                                                            type: 'noMatch',
                                                                        },

                                                                        {
                                                                            name: "confirmPassword",
                                                                            message: "The password and confirm password mot matched",
                                                                            type: 'noMatch',
                                                                        }

                                                                    ],
                                                                        // error: 'validation error'
                                                                );
                                                                    */
                                                                    return false
                                                                }
                                                                if (isValid){
                                                                    clearErrors(["password","confirmPassword"])
                                                                }
                                                            }
                                                        })}
                                                    />
                                                </Col>
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.TEXT}
                                                        name="company"
                                                        placeholder="Company"
                                                        icon="fa fa-building"
                                                        error={errors.company}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                    />
                                                </Col>
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.TEXT}
                                                        name="domain"
                                                        placeholder="Choose your company url"
                                                        icon="fa fa-building"
                                                        error={errors.domain}
                                                        formRef={register({
                                                            required: 'Required',
                                                            pattern: {
                                                                value: /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/,
                                                                message: "Invalid Format"
                                                            }
                                                        })}
                                                    />
                                                </Col>
                                                <Col xl="6">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.SELECT}
                                                        name="country"
                                                        placeholder="Country"
                                                        icon="fa fa-globe-asia"
                                                        error={errors.country}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                        // options={countries || []}
                                                    />
                                                </Col>
                                                <Col xl="12">
                                                    <InputControl
                                                        inputType={INPUT_TYPE.CHECKBOX}
                                                        name="termsAndCondition"
                                                        placeholder="I agree with"
                                                        error={errors.termsAndCondition}
                                                        formRef={register({
                                                            required: 'Required',
                                                        })}
                                                    />
                                                </Col>
                                                {/*{*/}

                                                {/*    // !!gqlError.message &&*/}
                                                {/*    errors &&*/}
                                                {/*    <Col xl="12">*/}
                                                {/*        <div style={{ marginTop: '1rem' }}>*/}
                                                {/*            <Alert color="danger">*/}
                                                {/*                /!*{gqlError.message}*!/*/}
                                                {/*                {errors}*/}
                                                {/*            </Alert>*/}
                                                {/*        </div>*/}
                                                {/*    </Col>*/}
                                                {/*}*/}
                                                <Col xl="4 mx-auto">
                                                    <button
                                                        className="btn btn-block text-center btn-primary mt-3"
                                                        type="submit"
                                                        // disabled={loading}
                                                        disabled={isLoaded}

                                                    >
                                                        {isLoaded ? 'Loading...' : 'Register'}
                                                    </button>
                                                </Col>
                                                <Col xl="12 mx-auto">
                                                    <div className="text-center" style={{ marginTop: 10 }}>
                                                        <p style={{ marginBottom: "10px" }}>Or login width</p>
                                                        <ul className="list-inline f-left-f">
                                                            <li className="list-inline-item">
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    style={{ marginRight: "1rem" }}
                                                                >
                                                                    <svg
                                                                        width={25}
                                                                        height={25}
                                                                        viewBox="0 0 13 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M3.99961 3.8V6.6H0.599609V10H3.99961V20H8.99961V10H11.9996L12.2996 6.7H8.99961V5.3C8.99961 4.5 9.19961 4.2 9.89961 4.2H12.2996V0H8.29961C5.29961 0 3.99961 1.3 3.99961 3.8Z"
                                                                            fill="rgba(0, 0, 0, 0.54)"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a
                                                                    href="#"
                                                                    target="_blank"
                                                                    style={{ marginRight: "1rem" }}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={20}
                                                                        height={20}
                                                                        viewBox="0 0 19.901 20"
                                                                        fill="rgba(0, 0, 0, 0.54)"
                                                                    >
                                                                        <g id="Group" transform="translate(-0.5 -0.5)">
                                                                            <path
                                                                                id="Path_1"
                                                                                data-name="Path 1"
                                                                                className="cls-1"
                                                                                d="M11.6,9.6V7.2H7.2V20.5h4.4V14.1c0-3.8,4.4-4.2,4.4,0v6.4h4.4V13C20.5,5.7,13.6,6,11.6,9.6Z"
                                                                            />
                                                                            <path
                                                                                id="Path_2"
                                                                                data-name="Path 2"
                                                                                className="cls-1"
                                                                                d="M2.8,4.9A2.2,2.2,0,1,0,.6,2.7,2.2,2.2,0,0,0,2.8,4.9Z"
                                                                            />
                                                                            <path
                                                                                id="Path_3"
                                                                                data-name="Path 3"
                                                                                className="cls-1"
                                                                                d="M4.9,7.2H.5V20.5H4.9Z"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a
                                                                    href=""
                                                                    target="_blank"
                                                                    style={{ marginRight: "1rem" }}
                                                                >
                                                                    <svg
                                                                        width={25}
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 16.2"
                                                                        height={20}
                                                                        fill="rgba(0, 0, 0, 0.54)"
                                                                    >
                                                                        <path
                                                                            id="Vector1"
                                                                            className="cls-1"
                                                                            d="M20,.7a8.247,8.247,0,0,1-2.6,1,3.991,3.991,0,0,0-3-1.3,4.078,4.078,0,0,0-4,5A11.955,11.955,0,0,1,1.9,1.1,4.055,4.055,0,0,0,3.2,6.6a4.136,4.136,0,0,1-1.9-.5,4.164,4.164,0,0,0,3.3,4.1,4.011,4.011,0,0,1-1.9.1,3.992,3.992,0,0,0,3.8,2.8A7.876,7.876,0,0,1,.4,14.8a11.322,11.322,0,0,0,6.3,1.8A11.664,11.664,0,0,0,18.4,4.4a7.957,7.957,0,0,0,2-2.1,7.107,7.107,0,0,1-2.2.7A4.181,4.181,0,0,0,20,.7Z"
                                                                            transform="translate(-0.4 -0.4)"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>



                                        <Col xl="4 mx-auto">
                                            <p className=" text-center">Already have an account?</p>
                                            {/*<Link to="login" className="btn btn-block btn-secondary">*/}
                                            {/*    Login*/}
                                            {/*</Link>*/}
                                        </Col>
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default  Registration;
// export default withAuthorization(Registration);
