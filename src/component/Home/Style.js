import {styled} from '@mui/material/styles';

export const HomeStyle = styled('div')(({theme}) => ({
    '& .nav-position': {
        position: "fixed",
        width: "100%",
        top: "0px",
        zIndex: "10",
    },
    '& .Appbar-setting': {
        background: "transparent",
        boxShadow: "none",
        marginTop: "40px",
        borderRadius: "30px",
        '& .MuiToolbar-root': {
            padding: "unset",

        },
        '& .MuiList-root': {
            display: "inline-flex",
            marginTop: "10px",
        },
        '& .MuiListItem-root': {
            paddingLeft: "10px !important",
            paddingRight: "10px !important",
        },
        // '& .MuiListItem-root':{
        //     paddingRight:"unset",
        // },
        '& .github': {
            height: "48px",
            width: "48px",
            cursor: "pointer",
            background: "rgba(22, 22, 22, 0.8)",
            borderRadius: "40px",
        },
        '& .right-nav': {
            textAlign: "end",
            '& .MuiList-root': {
                marginTop: "unset",
            },
        },
        '& .menu-setting': {
            color: "#5911d9"
        },
    },
    '& .nav-list-bg-rounded': {
        background: "rgba(22, 22, 22)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "100px",
        height: "58px",
        padding: "12px 32px 12px 24px",
        gap: "0px",
    },
    '& .right-nav': {
        gap: "8px"
    },

    '& .logo': {
        width: "34px",
        height: "34px",
    },
    '& .MuiButton-containedPrimary': {
        cursor: "pointer",
        background: "linear-gradient(96.34deg, rgba(82, 39, 255, 0.8) 0%, rgba(97, 0, 255, 0.8) 100%)" +
            ", radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.256) 100%)",
        backgroundBlendMode: "overlay, normal",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        boxShadow: "inset 0px -2px 2px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(255, 255, 255, 0.4)",
        borderRadius: "32px",
        backdropFilter: "blur(16px)",
    },
    '& .aplybtn': {
        height: "48px",
        width: "134px",
    },

    '& .nav-btn': {
        color: "#B7B5BA !important",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        textTransform: "capitalize",
    },
    '& .mob-draw': {
        '& .MuiList-root': {
            display: "inline-block !important",
        },

        '& .MuiListItemButton-root': {
            color: "#B7B5BA !important",
        },
    },
    '& .Genius-text': {
/*        color: "#FFFFFF !important",
        fontSize: "64px",
        fontFamily: "PlusJakartaSans-Bold",
        marginTop: "15%",
        textAlign: "center",*/
        /*color: "#FFFFFF !important",
        fontSize: "64px",
        fontFamily: "PlusJakartaSans-Bold",
        marginTop: "15%",
        textAlign: "center",
        radialGradient: "101.76% 166.92% at 48.26% 44.93%, #FFFFFF 29.74%, rgba(255, 255, 255, 0) 100%",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: "700",
        LineWeight: "90px",
        letterSpacing: "-0.04em",*/
    },
    '& .Blockhub-text': {
        /*color: "#FFFFFF !important",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        textAlign: "center",
        lineHeight: "24px",*/
    },
    '& .geniusbtn': {
        width: "166px",
        height: "50px",
        marginTop: "20px",
        marginBottom: "20px",
    },

    '& .portfolio-text': {
        color: "#FFFFFF !important",
        fontSize: "48px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .meme': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",
    },
    '& .port-card': {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        width: "500px",
        height: "384px",
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
        flex: "none",
        order: "0",
        flexGrow: "1"
    },
    '& .news-card': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "32px",
        height: "529px",
    },
    '& .shutter-img': {
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
    },
    '& .shtrpadign': {
        padding: "17px",
    },
    '& .Network-text': {
        color: "#FFFFFF",
        fontSize: "20px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "24px",
    },
    '& .Apparently-text': {
        color: "#B7B5BA",
        fontSize: "14px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
    },
    '& .join-bg': {
        background: "radial-gradient(49.43% 50% at 50% 50%, #1F143A 0%, #141414 100%)",
        //background: 'linear-gradient(180deg, #060606 0%, #141414 100%);',
        padding: "40px",
    },
    '& .Revolution': {
        color: "#FFFFFF",
        fontSize: "36px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "21px",
        textAlign: "center",
        padding: " 37px 0px",
    },
    '& .thrilled-text': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",
        textAlign: "center",
        letterSpacing: "-0.02em",
        flex: "none",
        order: 1,
        flexGrow: 0,
    },
    '& .thesis': {
        color: "#FFFFFF",
        fontSize: "48px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "64px",
        textAlign: "center",
        marginTop: "60px",
    },
    '& .Ponzi': {
        color: "#FFFFFF",
        fontSize: "20px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .list-investment': {
        display: "inline-flex",
        '& .MuiListItem-root': {
            width: "unset",
        },
    },

    '& .thrilled-text-2': {
        color: "#8D8A93",
        fontSize: "16px",
        fontFamily: "Inter-Medium",
        lineHeight: "24px",

    },
    '& .Asset-text': {
        color: "#FFFFFF",
        fontSize: "18px",
        fontFamily: "PlusJakartaSans-Bold",
        lineHeight: "30px",
    },
    '& .March-text': {
        color: "#8D8A93",
        fontSize: "14px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    '& .colapsebtn': {
        background: " radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        position: "relative",
        borderRadius: "32px",
        "&:hover": {
            background: " radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
            border: " 1px solid rgba(255, 255, 255, 0.16)",
        },
        '& svg': {
            position: "absolute",
            right: "19px",
        },
    },

    '& .colapse-bg': {
        background: "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.256) 0%, rgba(255, 255, 255, 0.1024) 100%)",
        border: " 1px solid rgba(255, 255, 255, 0.16)",
        backdropFilter: "blur(16px)",
        borderRadius: "24px",
    },
    '& .colapse-inner-pd': {
        padding: "15px",
    },
    '& .fotterbg': {
        background: "#141414",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "50px",
        paddingBottom: "50px",
    },
    '& .gettouch': {
        color: "#FFFFFF",
        fontSize: "16px",
        fontFamily: "PlusJakartaSans-Bold",
    },
    '& .ftraply': {
        fontSize: "14px",
        width: "130px",
        marginTop: "15px",
    },


    '& .copy-text': {
        color: "#B7B5BA",
        fontSize: "12px",
        fontFamily: "Inter-Medium",
        lineHeight: "21px",
        marginTop: "120px",
    },
    '& .email': {
        cursor: "pointer",
        textDecoration: "underline",

    },
    '& .ftricon': {
        height: "36px",
        width: "36px",
        cursor: "pointer",
    },

    '& .ftrlist': {
        '& .MuiList-root': {
            display: "inline-flex",
        },
        '& .MuiListItem-root': {
            paddingLeft: "unset",
        },
    },

    //  lg down started

    [theme.breakpoints.down('lg')]: {
        '& .Genius-text': {
            //fontSize: "50px",
        },
        '& .news-card': {
            height: "618px",
        },


    },

    //  md down started

    [theme.breakpoints.down('md')]: {
        '& .Genius-text': {
            //fontSize: "40px",
        },
        '& .nav-list-bg-rounded': {
            background: "unset",
            border: "unset",
            borderRadius: "unset",
        },


    },

    //  sm down started

    [theme.breakpoints.down('sm')]: {

        '& .Appbar-setting': {
            '& .MuiListItem-root': {
                paddingLeft: "unset",
                paddingRight: "unset",
            },
        },
        '& .portfolio-text': {
            fontSize: "36px",
        },
        '& .meme': {
            fontSize: "14px",
        },
        '& .Revolution': {
            fontSize: "21px",
            lineHeight: "36px",
            padding: " 23px 0px",

        },
        '& .thesis': {
            fontSize: "36px",
            lineHeight: "50px",

        },
        '& .colapsebtn': {
            '& svg': {
                right: "11px",
            },
        },
        '& .emailmob': {
            marginTop: "60px",
        },
        '& .copy-text': {
            textAlign: "center",
            marginTop: "80px",
        },
        '& .logo-2': {
            height: "auto",
            width: "91%",
            marginTop: "10px",
        },
        '& .aplybtn': {
            width: "116px",
            fontSize: "12px",

        },
        '& .Genius-text': {
            //marginTop: "200px",

        }
    }
}));