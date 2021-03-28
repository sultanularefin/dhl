import React from 'react';

export enum ALERT_ENUM {
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface Action {
    title: string,
    clickHandler: () => void,
}

interface Props {
    isLoading: boolean,
    type: ALERT_ENUM,
    // actions: Array<Action>,
    title: string,
    subTitle: string,
}

const FullScreenAlert: React.FC<Props> = ({ type,
                                              // actions,
                                              title, subTitle, isLoading }) => {
    return (
        <div
            className="wrapper-item-activation"
            style={{
                backgroundColor: "white",
                boxShadow: "1px 2px 3px #0000005c",
                padding: "30px"
            }}
        >
            {
                isLoading ? (
                    <div className="text-center">
                        <i className="fas fa-circle-notch fa-spin fa-8x"/>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="text-center" style={{marginBottom:30}}>
                            {
                                type === ALERT_ENUM.SUCCESS ? (
                                    <i className="fa fa-check-circle" style={{
                                        fontSize: 80,
                                        color: "#00800094"
                                    }}/>
                                ) : (
                                    <i className="fa fa-times-circle" style={{
                                        fontSize: 80,
                                        color: "red"
                                    }}/>
                                )
                            }
                        </div>
                        <div className="panel-header-item">
                            <h1 className="text-center">{title}</h1>
                        </div>
                        <div className="panel-body-text text-center" style={{fontSize:20}}>
                            {subTitle}
                        </div>
                        <div className="text-center">
                            {
                                // actions.map((action: Action) => (
                                //     <button
                                //         className="btn btn-primary "
                                //         key={action.title}
                                //         style={{
                                //             padding: 10,
                                //             paddingLeft: 20,
                                //             paddingRight: 20,
                                //             paddingTop:5,
                                //             fontSize: 20,
                                //             marginTop: 30
                                //         }}
                                //         onClick={action.clickHandler}
                                //     >
                                //         {action.title}
                                //     </button>
                                // ))
                            }
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    );
};
export default FullScreenAlert;
