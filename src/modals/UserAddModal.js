import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { UserService } from '../service/UserService';
import { Dialog } from 'primereact/dialog';

export const UserAddModal = (props) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [usercode, setUsercode] = useState("");
    const [data, setData] = useState([]);
    const [show, setShow] = useState(true);

    
    async function createUser() {
        await UserService.createUser({name:name,surname:surname,usercode:usercode}).then((res) => {
            if (res.status === 200) {
                props.toast.current.show({ severity: 'success', summary: 'Başarılı', detail: 'Kayıt Eklendi' });
                props.setShow(false);
                props.setIsUpdated(x=>x+1);
            }
        });
    }

    return (
        <Dialog header="Kullanıcı Ekle" visible={show} position={"top"} style={{ width: '50vw' }} onHide={() => {if (!show) return; setShow(false); }} draggable={false} resizable={false}>
        <div>
        <p className="m-0">Kullanıcı Adı</p>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
        <p className="m-0">Kullanıcı Soyadı</p>
        <InputText value={surname} onChange={(e) => setSurname(e.target.value)} />
        <p className="m-0">Kullanıcı Kod</p>
        <InputText value={usercode} onChange={(e) => setUsercode(e.target.value)} />
        </div>
        <div className='mt-3'>
        <Button type="button" label="Kaydet" onClick={() => { createUser() }}></Button>
        </div>
      
    </Dialog>

    );
};
