import React from "react";
import s from './Yangiliklar.module.css'
import {
    addnewActionCreator,
    onChangeInput1ActionCreator,
    onChangeInput2ActionCreator,
    onChangeInput3ActionCreator
} from "../../redux/yangiliklar-reducer";


const Yangiliklar = (props) => {
    let observation = React.createRef();
    let cardHeader = React.createRef();
    let cardBody = React.createRef();
    let cardFooter = React.createRef();
    const hideShow = () => {
        if (observation.current.className == 'd-none') {
            observation.current.className = ''
        } else {
            observation.current.className = 'd-none'
        }

    }
    const addNew = () => {

        observation.current.className = 'd-none'
        props.dispatch(addnewActionCreator(props.yangiliklar.length, cardHeader.current.value, cardBody.current.value, cardFooter.current.value))


    }

    let onChangeInput1 = () => {
        props.dispatch(onChangeInput1ActionCreator(props.yangiliklar.length - 1, cardHeader.current.value))

    }
    let onChangeInput2 = () => {
        props.dispatch(onChangeInput2ActionCreator(props.yangiliklar.length - 1, cardBody.current.value))
    }
    let onChangeInput3 = () => {
        props.dispatch(onChangeInput3ActionCreator(props.yangiliklar.length-1,cardFooter.current.value))
    }
    let newInfo = props.yangiliklar.map((t, number) => <div className='col-md-4'>
        <div className="card">
            <div className="card-header">{t.Head}</div>
            <div className="card-body">{t.Body}</div>
            <div className="card-footer">{t.Footer}</div>
        </div>

    </div>)


    return (
        <div className={s.Yangiliklar}>
            <div className="col-md-8">
                <div className="container d-flex">
                    {newInfo}
                </div>
            </div>


            <div className='col-md-4 float-right d-flex flex-column'>
                <button type='button' className='btn btn-info ml-auto' onClick={hideShow}>Add new</button>
                <div className='d-none' ref={observation}>
                    <div className="card  mt-5 ">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <label htmlFor="aa" className='mt-1'>head</label>
                            <input className='form-control w-75' id='aa' ref={cardHeader}
                                   onChange={onChangeInput1}
                                   value={props.yangiliklar[props.yangiliklar.length - 1].Head}></input>

                        </div>
                        <div className="card-body d-flex justify-content-between align-items-center"><label
                            htmlFor="aa1" className='mt-1'>body</label>
                            <input className='form-control w-75' id='aa1' ref={cardBody}
                                   onChange={onChangeInput2}
                                   value={props.yangiliklar[props.yangiliklar.length - 1].Body}
                            ></input></div>
                        <div className="card-footer d-flex justify-content-between align-items-center"><label
                            htmlFor="aa2" className='mt-1'>Footer</label>
                            <input className='form-control w-75' id='aa2' ref={cardFooter}
                                   onChange={onChangeInput3}
                                   value={props.yangiliklar[props.yangiliklar.length - 1].Footer}
                            ></input>
                        </div>

                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button type='button' className='btn btn-success mt-3 ml-auto' onClick={addNew}>Add</button>
                    </div>

                </div>


            </div>


        </div>

    )
}
export default Yangiliklar