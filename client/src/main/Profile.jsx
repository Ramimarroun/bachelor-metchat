import { TopNav } from "../components/top-nav";
import cover from "../assets/img/cover.png";
import { Contact } from "../components/contact";
import { Flex } from "../components/Flex";
import { Interesser } from "../components/interesser";
import { useAccount } from "../app/account-context";
export const Profile = () => {
    var account = useAccount();
    return (
        <>
            <TopNav />

            <div
                className=" w-100"
                style={{
                    height: 300,
                    backgroundImage: `url(${cover})`,
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="container-fluid">
                <Flex content="space-between">
                    <div style={{ marginTop: -50 }}>
                        <Contact
                            width={100}
                            height={100}
                            textStyle={{
                                top: 30,
                                position: "relative",
                                fontSize: 35,
                                fontWeight: "bold",
                            }}
                        />
                    </div>
                    <button className="profile-edit-button">Rediger</button>
                </Flex>

                <div className="ms-5 mt-5 mb-5">
                    <h6>Bio</h6>
                    <textarea style={{ width: 500 }}></textarea>

                    <h6 className="mt-5">Interesser</h6>
                    <Interesser name="Mat" />
                    <Interesser name="Knust" />
                    <Interesser name="Litratur" />
                </div>
            </div>
        </>
    );
};
