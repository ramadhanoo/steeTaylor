import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThemesActions, { ThemeSelectors } from '../../Redux/ThemeRedux';
import { success } from '../../Components/index'
import { navigate } from '../../Navigation/RootNavigation'


export const usePesanan = () => {
    const dispatch = useDispatch();
    const themeSelector = useSelector((state) => state.theme)
    const themes = useSelector(ThemeSelectors.getColors);

    const [bahan, setBahan] = useState("")
    const [model, setModel] = useState("")
    const [warna, setWarna] = useState("")
    const [jk, setJk] = useState("");
    const [ukuran, setUkuran] = useState("");

    const [lingkarBadan, setLingkarBadan] = useState("");
    const [lingkarPinggang, setLingkarPinggang] = useState("");
    const [lingkarBahu, setLingkarBahu] = useState("");
    const [lingkarTangan, setLingkarTangan] = useState("");

    useEffect(() => {

    }, []);

    const actionsData = () => {
        var dataBahan = {
            bahan: bahan,
            model: model,
            warna: warna,
            ukuran: ukuran,
            jk: jk,
            lingkarBadan: lingkarBadan,
            lingkarPinggang: lingkarPinggang,
            lingkarBahu: lingkarBahu,
            lingkarTangan: lingkarTangan
        }

        navigate("Summaries", { pesanan: dataBahan })
    }

    const selectedBahan = (bahan) => {
        setBahan(bahan)
    }
    const selectedModel = (model) => {
        setModel(model)
    }

    const selectedWarna = (warna) => {
        setWarna(warna)
    }
    

    const selectedJk = (jk) => {
        setJk(jk)
    }

    const selectedUkuran = (ukuran) => {
        setUkuran(ukuran)
    }

    return {
        state: {
            themes,
            bahan,
            model,
            warna,
            jk,
            lingkarBadan,
            lingkarPinggang,
            lingkarBahu,
            lingkarTangan,
            ukuran
        },
        actions: {
            actionsData,
            setBahan,
            setModel,
            setWarna,
            setJk,
            selectedBahan,
            selectedModel,
            selectedWarna,
            selectedJk,
            setLingkarBadan,
            setLingkarPinggang,
            setLingkarBahu,
            setLingkarTangan,
            setUkuran,
            selectedUkuran
        },
        data: {},
    };
}


