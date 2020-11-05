import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status:this.props.status
    }
    activEditMode = () => {

        this.setState({
            editMode: true
        })
    }
    deactivEditMode = () => {
        this.setState({
            editMode: false,

        })
        this.props.updateStatus(this.state.status)

    }
    changeStatus = (e) => {
        console.log(e)
        this.setState({
            status: e.currentTarget.value
        })

    }


    render() {


        return (
            <>
                {!this.state.editMode ? <div>
                    <span onDoubleClick={this.activEditMode}>{this.props.status ||"----"}</span>
                </div> : < div>
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivEditMode.bind(this)} value={this.state.status}/>
                </div>
                }


            </>
        )
    }
}

export default ProfileStatus;