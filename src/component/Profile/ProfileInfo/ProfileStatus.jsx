import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
activEditMode(){
       
        this.setState({
            editMode:true
        })
}
deactivEditMode(){
        this.setState({
            editMode:false
        })
}


    render() {


        return (
            <>
                {!this.state.editMode? <div>
                    <span onDoubleClick={this.activEditMode.bind(this)}>{this.props.status}</span>
                </div>:< div>
                    <input autoFocus={true} onBlur={this.deactivEditMode.bind(this)} value={this.props.status}/>
                </div>
                }


            </>
        )
    }
}

export default ProfileStatus;