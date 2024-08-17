const dashboardStyles = {
    navbarCont: {
        height: "80px",
        width: "100%",
        backgroundColor: "#42e0f5",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },

    navChildCont: {
        height: "inherit",
        width: { xs: "97%", sm: "90%", md:"95%",lg:"90%" },
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    },

    userActivityText: {
        color: "black",
        fontSize: { sm: "15px", md: "17px", lg: "20px" },
        fontWeight: 600,
        fontFamily: 'Roboto',
        display: { xs: "none", sm: "block" }
    },

    userActivityDarkText: {
        color: "black",
        fontSize: { xs: "26px", sm: "30px", md: '35px', lg: "45px" },
        fontWeight: 600,
        fontFamily: 'Roboto',
        textAlign: "center"
    },

    userActivityLightText: {
        color: "#fff",
        fontSize: { xs: "26px", sm: "30px", md: '35px', lg: "45px" },
        fontWeight: 600,
        fontFamily: 'Roboto',
        textAlign: "center"
    },

    profileTextCont: {
        display: "flex",
        alignItems: "center",
        gap: { xs: 3.5, sm: 3 },
        flexDirection: { xs: "row-reverse", sm: "row" }
    },

    profileName: {
        color: "black",
        fontSize: { xs: "17px", md: "16px", lg: "18px" },
        fontWeight: 500,
        fontFamily: 'Roboto'
    },

    profileRole: {
        color: "black",
        fontSize: { xs: "14px", md: "14px", lg: "16px" },
        fontWeight: 500,
        fontFamily: 'Roboto'
    },

    profileImg: {
        width: { xs: "60px", sm: "65px" },
        height: { xs: "60px", sm: "65px" },
        borderRadius: "50%",
        objectFit: "cover"
    },

    imageUploadCont: {
        position: "relative",
        background: "#fff",
        zIndex: 1,
        margin: "auto",
        height: { xs: "60px", sm: "65px" },
        maxWidth: { xs: "60px", sm: "65px" },
        borderRadius: "50%",
        "& > label": {
            width: "30px",
            height: "30px",
            background: "#f62b2a",
            position: "absolute",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: "-16px",
            top: "7px",
            zIndex: 3,
            cursor: "pointer",
            "& > svg": {
                width: "18px",
                height: "18px",
            },
        },
    },

    bodyCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        "& MuiInputBase-root": {
            padding: "1px"
        },
        "& > div": {
            width: { xs: "97%", sm: "90%", md:"95%",lg:"90%" },
            paddingBottom: 8
        }
    },

    selectEl: {
        padding: 1,
        borderRadius: 2,
        boxShadow: 1,
    },

    loaderCont:{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' },

    tableContainer: { borderRadius: 2, overflowX: 'auto', boxShadow: 3 },

    mainContBox: { flexGrow: 1, p: 0 },

    selectBtnCont:{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'center' },

    switchViewBtn:{
        mt: { xs: 2, sm: 0 },
        backgroundColor: "#42e0f5",
        fontWeight: '200',
        fontFamily: "Roboto",
        fontSize: "15px",
        textTransform: "capitalize",
        boxShadow: 3,
        '&:hover': { backgroundColor: "#42e0f5" },
        borderRadius: 2,
      }
}


export default dashboardStyles