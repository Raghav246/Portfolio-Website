export default function Navbar(){
    return(
        <>
        <div>
            <ul style={{display:'flex',justifyContent:'center',alignitems:'center',listStyleType:'none'}}>
             <li style={{position:'absolute',right:'630px',color:'white'}}><i className="fa fa-home"></i> Home</li>
             <li style={{color:'white',position:'absolute',right:'520px'}}><i class="fas fa-user-circle"></i> About</li>
             <li style={{color:'white',position:'absolute',right:'410px'}}><i class="fa fa-cogs" aria-hidden="true"></i> Skills</li>
             <li style={{color:'white',position:'absolute',right:'300px'}}><i className="fas fa-project-diagram"></i> Projects</li>
             <li style={{color:'white',position:'absolute',right:'190px'}}><i className="fa-solid fa-file"></i> Resume</li>
            </ul>
        </div>
        </>
    )
}