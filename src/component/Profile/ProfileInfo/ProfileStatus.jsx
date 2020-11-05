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

        this.setState({
            status: e.currentTarget.value
        })

    }
componentDidUpdate(prevProps, prevState) {
        if(prevProps.status!=this.props.status){
            this.setState({
                status:this.props.status
            })
        }
}

    render() {


        return (
            <>
                {!this.state.editMode &&<div>
                    <span onDoubleClick={this.activEditMode}>{this.props.status ||"----"}</span>
                </div> }
                {
                this.state.editMode &&< div>
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivEditMode.bind(this)} value={this.state.status}/>
                </div>
                }{console.log(this)}


            </>
        )
    }
}

export default ProfileStatus;