import React from "react";
import s from './Yangiliklar.module.css'


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


        let news = {
            Head: cardHeader.current.value,
            body: cardBody.current.value,
            footer: cardFooter.current.value
        }
        cardHeader.current.value = '';
        cardBody.current.value = '';
        cardFooter.current.value = '';
        observation.current.className = 'd-none'
        props.AddNew(news)


    }
    let newInfo = props.yangiliklar.map((t) => <div className='col-md-4'>
            <div className="card">
                <div className="card-header">{t.Head}</div>
                <div className="card-body">{t.body}</div>
                <div className="card-footer">{t.footer}</div>
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
                            <input className='form-control w-75' id='aa' ref={cardHeader} ></input>

                        </div>
                        <div className="card-body d-flex justify-content-between align-items-center"><label
                            htmlFor="aa1" className='mt-1'>body</label>
                            <input className='form-control w-75' id='aa1' ref={cardBody}></input></div>
                        <div className="card-footer d-flex justify-content-between align-items-center"><label
                            htmlFor="aa2" className='mt-1'>Footer</label>
                            <input className='form-control w-75' id='aa2' ref={cardFooter}></input>
                        </div>

                    </div>
                    <div className="w-100 d-flex justify-content-end">
                        <button type='button' className='btn btn-success mt-3 ml-auto' onClick={addNew}>Add</button>
                    </div>

                </div>


            </div>


        </div>

    )


//    <div >
//
//     {props.yangiliklar.map(sa =>
//         <div>{sa.id}
//             <br/>
//             {sa.matni}
//         </div>
//     )}
//
//
// </div>
}
export default Yangiliklar