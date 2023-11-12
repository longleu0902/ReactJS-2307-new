import { NavLink } from "react-router-dom";

const AuthFormSignUp = ({hanldeOpenSignup}) => {
    return (
        <div className="modal">
            <div className="modal_ovarlay"></div>
            <div className="modal_body">
                {/* authen form */}
                <div className="auth-form">
                    <div className="Close-auth-form">
                        <button onClick={()=>hanldeOpenSignup(false)} style={{ border: 'none', backgroundColor: '#fff' }} >X</button>
                    </div>
                    <div className="auth-form_container">
                        <div style={{ marginTop: '24px' }} className="auth-form_header">
                            <h3 className="auth-form_heading">Đăng kí</h3>

                        </div>
                        <div className="auth-form_form">
                            <div className="auth-form_group">
                                <input
                                    type="text"
                                    placeholder="Email của bạn"
                                    className="auth-form_input"
                                />
                            </div>
                            <div className="auth-form_group">
                                <input
                                    type="text"
                                    placeholder="Mật khẩu của bạn"
                                    className="auth-form_input"
                                />
                            </div>
                            <div className="auth-form_group">
                                <input
                                    type="text"
                                    placeholder="Nhập lại mật khẩu "
                                    className="auth-form_input"
                                />
                            </div>
                        </div>
                        <div className="auth-form_aside">
                            <p className="auth-form_policy-text">
                                Bằng việc đăng kí, bạn đã đồng ý với .
                                <a href="" className="auth-form_text-link">
                                    Điều khoản dịch vụ
                                </a>
                                &amp;
                                <a href="" className="auth-form_text-link">
                                    Chính sách bảo mật
                                </a>
                            </p>
                        </div>
                        <div style={{marginBottom:30}} className="auth-form_controls">
                            {/* <NavLink to='/giohang'> */}
                            <button onClick={()=>hanldeOpenSignup(false)} className="btn btn-normal auth-form_controls-back">
                                TRỞ LẠI
                            </button>
                            {/* </NavLink> */}
                            <button className="btn btn-normal btn-grey ">ĐĂNG KÍ</button>
                        </div>
                    </div>
                </div>
                {/* SignUp form  */}

            </div>
        </div>

    )
}
export default AuthFormSignUp;