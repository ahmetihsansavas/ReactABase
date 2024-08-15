import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { UserService } from '../service/UserService';
import { Toast } from 'primereact/toast';
import { UserAddModal } from '../modals/UserAddModal';

export const User = (props) => {
    const [deneme, setDeneme] = useState("denemee");
    const [id, setId] = useState(0);
    const [name, setName] = useState([]);
    const [data, setData] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [isUpdated, setIsUpdated] = useState(0);
    const toast = useRef(null);

    async function getData() {
        await UserService.getUserName(id).then((res) => {
            if (res.status === 200) {
                setName(res.data);
            }
        });
    }

    async function getUsersData() {
        await UserService.getUsers().then((res) => {
            if (res.status === 200) {
                setData(res.data);
            }
        });
    }

    useEffect(() => {
        getUsersData();
    }, [deneme,isUpdated]);
    return (
        <div>
           <Toast ref={toast} />
            <h1></h1>
            <div>Kullanıcı ADI---{name}</div>
            <div>
                <InputText value={id} onChange={(e) => setId(e.target.value)} />
                <Button type="button" label="Arama" onClick={() => { getData() }}></Button>
            </div>

            <div>Kullanıcılar</div>
            <div>
                <Button type="button" label="Kullanıcı Listesi" onClick={() => { getUsersData() }}></Button>
            </div>
            <div>
                <ul>
                    {data.map((element, index) => {
                        return (
                            <li>{+element.id+" "+element.name +" "+element.surname +" "+element.userCode+" "}</li>
                        )
                    })}
                </ul>
            </div>
            <Button type="button" label="Kullanıcı Ekle" onClick={() => { setShowAdd(true) }}></Button>
        {
            showAdd == true ?
            <UserAddModal toast={toast} setShow={setShowAdd} setIsUpdated={setIsUpdated} />
            :""
        }

        </div>

    );
};
