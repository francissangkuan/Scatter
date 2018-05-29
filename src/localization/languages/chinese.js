import * as KEYS from '../keys';
import * as AlertTypes from '../../models/alerts/AlertTypes';

export default {
    [KEYS.GENERIC_New]:`新身份`,
    [KEYS.GENERIC_Save]:`保存`,
    [KEYS.GENERIC_Ignored]:`忽略`,
    [KEYS.GENERIC_Identity]:`身份`,
    [KEYS.GENERIC_Contract]:`合约`,
    [KEYS.GENERIC_Action]:`操作`,
    [KEYS.GENERIC_Removed]:`已移除`,
    [KEYS.GENERIC_Name]:`名字`,
    [KEYS.GENERIC_Search]:`搜索`,
    [KEYS.GENERIC_VerifyPassword_Header]:`确认您的密码`,
    [KEYS.GENERIC_VerifyPassword_Description]:`您需要在确认密码后才可以继续进行当前操作.`,
    [KEYS.GENERIC_Host]:'主机',
    [KEYS.GENERIC_Port]:'接口',
    [KEYS.GENERIC_Requires]:'要求',
    [KEYS.GENERIC_RequiredProperties]:'必填属性',
    [KEYS.GENERIC_Import]:'导入',
    [KEYS.GENERIC_ChainID]:'链ID',
    [KEYS.GENERIC_Blockchain]:'区块链',
    [KEYS.GENERIC_Account]:'账户',

    [KEYS.PLACEHOLDER_Name]:'名字',
    [KEYS.PLACEHOLDER_PublicKey]:'公钥',
    [KEYS.PLACEHOLDER_PrivateKey]:'私钥',
    [KEYS.PLACEHOLDER_FirstName]:'名字',
    [KEYS.PLACEHOLDER_LastName]:'姓名',
    [KEYS.PLACEHOLDER_Email]:'邮箱',
    [KEYS.PLACEHOLDER_BirthDate]:'生日',
    [KEYS.PLACEHOLDER_LocationName]:'页面地址',
    [KEYS.PLACEHOLDER_DefaultLocationName]:'主页',
    [KEYS.PLACEHOLDER_Phone]:'电话',
    [KEYS.PLACEHOLDER_Address]:'住址',
    [KEYS.PLACEHOLDER_City]:'城市',
    [KEYS.PLACEHOLDER_Postal]:'邮编',
    [KEYS.PLACEHOLDER_Country]:'国家',
    [KEYS.PLACEHOLDER_State]:'州',
    [KEYS.PLACEHOLDER_Password]:'密码',
    [KEYS.PLACEHOLDER_ConfirmPassword]:'确认密码',
    [KEYS.PLACEHOLDER_NewPassword]:'新密码',
    [KEYS.PLACEHOLDER_ConfirmNewPassword]:'确认新密码',
    [KEYS.PLACEHOLDER_DomainOrIP]:'域 或 IP',

    [KEYS.BUTTON_CreateIdentity]:'创建身份',
    [KEYS.BUTTON_ImportAccount]:'导入账号',
    [KEYS.BUTTON_ImportKeychain]:'导入钥链',
    [KEYS.BUTTON_SelectFile]:'选择文件',
    [KEYS.BUTTON_AddNewLocation]:'添加新地址',
    [KEYS.BUTTON_SetAsDefaultLocation]:'设为默认地址',
    [KEYS.BUTTON_RemoveLocation]:'清除地址',
    [KEYS.BUTTON_ChangePassword]:'更改密码',
    [KEYS.BUTTON_DestroyScatter]:'销毁Scatter',
    [KEYS.BUTTON_CreateNewScatter]:'创建新的Scatter',
    [KEYS.BUTTON_LoadFromBackup]:'从备份中载入',
    [KEYS.BUTTON_Unlock]:'解锁',
    [KEYS.BUTTON_ExportScatter]:'导出Scatter',
    [KEYS.BUTTON_GenerateKeyPair]:'产生新的钥对',
    [KEYS.BUTTON_Validate]:'验证',
    [KEYS.BUTTON_Copy]:'复制',
    [KEYS.BUTTON_ChangeLanguage]:'更改语言',
    [KEYS.BUTTON_Cancel]:'取消',
    [KEYS.BUTTON_Accept]:'接受',
    [KEYS.BUTTON_Deny]:'拒绝',
    [KEYS.BUTTON_Yes]:'是',
    [KEYS.BUTTON_No]:'不是',
    [KEYS.BUTTON_UseSelectedAccount]:'使用选定账户',
    [KEYS.BUTTON_SelectIdentity]:'选择身份',
    [KEYS.BUTTON_ChangeName]:'更改身份名',
    [KEYS.BUTTON_ClaimIdentity]:'认领身份',
    [KEYS.BUTTON_RegisterIdentity]:'注册身份',

    [KEYS.MAINMENU_Identities]:'身份',
    [KEYS.MAINMENU_Keys]:'钥对',
    [KEYS.MAINMENU_Permissions]:'许可',
    [KEYS.MAINMENU_History]:'历史',
    [KEYS.MAINMENU_Lock]:'锁屏',

    [KEYS.IDENTITIES_Header]:`您还没有建立任何身份.`,
    [KEYS.IDENTITIES_Description]:`
        身份以容器的形式储存各类个人信息，如姓名，住址，和各类区块链账户或钥对. 与此同时，身份拥有钥对，
        而对钥对的所有权可以在被证实的情况下为您提供进入应用时所需的验证，而不用输入密码.
    `,

    [KEYS.IDENTITY_DisablingHeader]:`停用是什么意思?`,
    [KEYS.IDENTITY_DisablingDescription]:`
        停用该身份将阻止其在所有与其相关联的的应用中被使用. 
        这项功能允许您在不永久删除个体身份或在各应用中的使用许可的情况下实现停用意图，
        因为永久删除或停用使用许可后将您难以恢复.
    `,

    [KEYS.IDENTITY_NameHeader]:`身份名`,
    [KEYS.IDENTITY_NameDescription]:`
        各应用可以使用该身份名作为用户名，因为该身份在全网中拥有唯一性.
        如果您尚未在RIDL系统中注册，您将自动获得一个随机生成的身份名.     
    `,
    [KEYS.IDENTITY_NoKeyPairsHeader]:`缺少钥对！`,
    [KEYS.IDENTITY_NoKeyPairsDescription]:`
        您在添加一个区块链账号前必须添加一份钥对. 请进入主菜单并选择：
    `,
    [KEYS.IDENTITY_AccountHeader]:`账户`,
    [KEYS.IDENTITY_AccountDescription]:`
        账户的作用是持有用户的资金并允许您与区块链中的智能合约进行交流.
        账户与身份的关系，可以比作链接在您护照上的银行账户，在您护照不变的情况下账户可以随时更改.
    `,
    [KEYS.IDENTITY_PersonalHeader]:`个人信息`,
    [KEYS.IDENTITY_PersonalDescription]:`
        个人信息可以被添加至请求该信息的应用中.
        比如说购物网站可能需要您的全名以便知道货物将送至谁.
    `,
    [KEYS.IDENTITY_LocationHeader]:`地址信息`,
    [KEYS.IDENTITY_LocationDescription]:`
        地址信息可以被添加至请求该信息的应用中.
        比如说购物网站可能需要您的收货地址以便知道将货物送至哪里.   
    `,

    [KEYS.PERMISSIONS_Header]:`无法找到任何可供显示的许可.`,
    [KEYS.PERMISSIONS_Description]:`
        许可的设置场景有两种，1.您向应用程序提供身份内容的使用许可
                            2.您将某种合约行为置入白名单，其将来的运行不再向您发送授权提示.
    `,
    [KEYS.PERMISSION_RevokeIdentity]:`撤销身份`,
    [KEYS.PERMISSION_RevokeContract]:`撤销合约`,
    [KEYS.PERMISSION_RevokeAction]:`撤销操作`,

    [KEYS.HISTORIES_Header]:`无法找到任何可供显示的历史事件.`,
    [KEYS.HISTORIES_Description]:`
        一旦历史事件存在，您将得以看见的是一个表单，显示您的账号在Scatter中发生的历史事件，
        但该表单不包括任何该账号在Scatter外发生的历史事件.
     `,
    [KEYS.HISTORIES_Note]:`
        备注：通过设置栏中的备份选项来导出Scatter中的数据并不能保存这些历史事件.
        当您导入Scatter事件时，您账户中的历史事件也将被清空. 
        正确的历史导出方法是使用此面板中导航栏上的操作键.      
    `,

    [KEYS.SETTINGSMENU_Networks]:'网络',
    [KEYS.SETTINGSMENU_Keypairs]:'钥对',
    [KEYS.SETTINGSMENU_Language]:'语言',
    [KEYS.SETTINGSMENU_AutoLock]:'自动锁屏',
    [KEYS.SETTINGSMENU_Password]:'密码',
    [KEYS.SETTINGSMENU_Backup]:'备份',
    [KEYS.SETTINGSMENU_Destroy]:'销毁',

    [KEYS.BACKUP_Header]:`导出已加密的备份`,
    [KEYS.BACKUP_Description]:`
        Scatter上的导出功能允许您将数据导入新的设备中. 导出的文件将保持加密，您必须持有助记词或密码，否则文件将无法解码.
        存在原先账号中的私钥将在导出数据前被销毁，唯一存在且会随着数据被导出的私钥是您的身份秘钥.
    `,

    [KEYS.IMPORT_Header]:`导入已加密备份`,
    [KEYS.IMPORT_Description]:`
        导入的已加密钥链文件将重建用户的Scatter钥链，但此次导入的内容中不包括您先前使用的网络与账户.         
    `,

    [KEYS.PASS_Header]:`输入一个新的密码`,
    [KEYS.PASS_Description]:`
        在本次密码更改过程中，您将取消加密之前所有已保存的信息，这些信息通常情况下总是被加密的. 
        在完成设置新的密码后，这些文件将再次被加密.
    `,

    [KEYS.NETWORK_Header]:`添加一个新的网络`,
    [KEYS.NETWORK_Description]:`
        各程序通常在特定网络中运行，但他们或不在相同网络中运行.
        比如说某程序在一个测试网中运行以测试未发布的新功能，
        为了和该测试网互动，您也需要在该测试网中拥有一个账号.    
    `,

    [KEYS.DESTROY_Header]:`正在销毁Scatter`,
    [KEYS.DESTROY_Description]:`
        您即将销毁您的整个Scatter钥链. 取回本Scatter的唯一方式是将先前导出的Scatter Json导入新的设备中.
        您将无法通过其他任何形式认领您的身份. 请务必确保您已经通过设置栏中的备份功能完成相关备份。       
    `,

    [KEYS.LANGUAGE_Header]:`选择您的语言`,

    [KEYS.KEYPAIRS_NoKeyPairsHeader]:`您未拥有任何钥对.`,
    [KEYS.KEYPAIRS_NoKeyPairsDescription]:`
        请点击右上角的按键以完成创建/导入钥对.
    `,

    [KEYS.KEYPAIR_Header]:`生成一个新的钥对`,
    [KEYS.KEYPAIR_Description]:`
        您可以使用本面板来生成钥对. 这些钥对将于设备内本地生成，且不会转送至任何其他地方. 您也可以输入您的私钥来自动生成一份公钥.

    `,R_Important]:`请在其他地点储存您的私钥，您将无法在Scatter中获得本私钥！`,
    [KEYS.KEYPAIR_Validation_Header]:`生成一个新的钥对`,
    [KEYS.KEYPAIR_Validation_Valid]:`该私钥有效，由其生成的公钥与您提供的公钥相吻合.`,
    [KEYS.KEYPAIR_Validation_Invalid]:`由该私钥生成的公钥与您提供的公钥不相吻合！`,


    [KEYS.LOCK_Header]:`自动锁屏计时`,
    [KEYS.LOCK_Description]:`
        自动锁屏功能将避免您在离开时忘记锁屏.
    `,
    [KEYS.LOCK_Minute]:`分钟`,
    [KEYS.LOCK_Minutes]:`分钟`,
    [KEYS.LOCK_Hour]:`小时`,
    [KEYS.LOCK_Hours]:`小时`,
    [KEYS.LOCK_NeverLock]:`从不锁屏`,


    [KEYS.MNEMONIC_Header]:`助记词`,
    [KEYS.MNEMONIC_Description]:`助记词是一系列转译成了密码种的词汇.`,
    [KEYS.MNEMONIC_Note]:`
        Be sure to save yours somewhere safe. It is the only way to regain access to your 
        Scatter and decrypt your private information if you forget your password.
    `,

    [KEYS.ERROR_MustSelectItem]:`您必须选择一个项目.`,

    [KEYS.ALERT_Type]:(type) => {
        switch(type){
            case AlertTypes.Error:              return '错误';
            case AlertTypes.Prompt:             return '提示';
            case AlertTypes.SelectAccount:      return '选择账户';
        }
    },

    //2
    [KEYS.ALERT_BadIdentityName]:[
        '无效的身份名',

        `身份名的长度必须保持在3~20个字符间.
         身份名必须基于字母与数字，但可以包含空格、破折号以及下划线.`
    ],
    //2
    [KEYS.ALERT_IdentityNameExists]:[
        '身份名已存在',

        '该身份名已在另一个身份中注册.'
    ],
    //2
    [KEYS.ALERT_NoSuchIdentityName]:[
        '无法找到该身份名',

        '该身份名未在RIDL中预约.'
    ],
    //2
    [KEYS.ALERT_KeyPairExists]:[
        '钥对已存在',

        '该钥对已存在于您的钥链中.'
    ],
    //2
    [KEYS.ALERT_BadKeyPairName]:[
        '无效的钥对名',

        '钥对不可重复.'
    ],
    //2
    [KEYS.ALERT_InvalidPrivateKey]:[
        '无效的私钥',

        `您输入的私钥无效，请检查后再次输入.`
    ],
    //2
    [KEYS.ALERT_NoAccountsFound]:[
        '账户不存在',

        `不存在与该私钥关联的账户.
         如果您要导入非Scatter生成的钥对，请创建一个账户后再导入本钥对
        .`
    ],
    //2
    [KEYS.ALERT_PasswordsDoNotMatch]:[
        '密码不符',

        `您输入的密码与确认密码不符.`
    ],
    //2
    [KEYS.ALERT_BadPassword]:[
        '无效的密码',

        '密码至少为8位'
    ],
    //2
    [KEYS.ALERT_WrongPassword]:[
        '错误的密码',

        '密码错误.'
    ],
    //2
    [KEYS.ALERT_NetworkHostInvalid]:[
        '无效的网络主机',

        `您输入的网络主机无效. 主机应该是一个域
         ( ex: testnet.eos.io ) 或者一个 IP ( ex: 192.168.0.1 ).`
    ],
    //2
    [KEYS.ALERT_NetworkExists]:[
        '网络已存在',

        '已有另一个网络存在相同的主机与接口. 同一个网络不需要同时存在两次.'
    ],
    //2
    [KEYS.ALERT_RemovingEndorsedNetwork]:[
        '无法消除该背书网络',

        `您无法消除Scatter的背书网络.`
    ],
    //2
    [KEYS.ALERT_NoIdentityWithProperties]:fields => [
        '身份无法找到',

        `该程序请求的身份含有您不拥有的选填项，该选填项是'${fields.join(', ')}'`
    ],
    //2
    [KEYS.ALERT_YouMustSelectAnIdentity]:[
        '您必须选择一个身份.',

        `如果不愿暴露您的身份，请点击拒绝键. 否则您必须选择一个身份以便接受对方发来的请求.`
    ],
    //2
    [KEYS.PROMPT_DestroyingScatter]:[
        '销毁Scatter',

        '这是您最后一次机会，请再次检查确认是否已经备份.'
    ],
    //2
    [KEYS.PROMPT_RevokingIdentity]:domain => [
        '撤销身份',

        `您将要从 ${domain}中撤销身份. 这将移除您在该身份中的所有联系人和建立的许可清单.`
    ],
    //2
    [KEYS.PROMPT_RevokingContract]:domain => [
        '撤销联系人',

        `您将从 ${domain}中撤销所有联系人. 这将同时清除与联系人相关联的许可清单.`
    ],
    //2
    [KEYS.PROMPT_RevokingContractAction]:domain => [
        '撤销合约操作',

        `您将从 ${domain}中撤销该合约操作`
    ],
    //2
    [KEYS.PROMPT_RemovingIdentity]:name => [
        '身份移除中',

        `您将移除名为'${name}'的身份. 该次移除身份的操作不可逆，但其关联的许可清单可以. 如果该身份正在程序中被使用，您或许可以尝试禁用功能.`
    ],
    //2
    [KEYS.PROMPT_DeletingKeyPair]:identities => [
        '钥对删除中',

        identities.length ? `该钥对正被使用于: '${identities.join(', ')}'` : `该钥对未在任何身份中被使用.`
    ],
    //2
    [KEYS.PROMPT_RemovingAccount]:formattedAccountName => [
        '移除账户',

        `您正要从当前身份中移除名为 ${formattedAccountName}的账户.`
    ],
    //2
    [KEYS.PROMPT_RemovingNetwork]:[
        'Removing Network',

        `您正要移除一个网络. 删除后您将无法在该网络上创建账户,
         但您可以重新添加该网络.任何已存在于该网络中的账户将不会被更改或移除.`
    ],
    //2
    [KEYS.PROMPT_WhitelistingContractAction]:[
        '您正在将一个货币合约加入白名单',

        `将一个货币相关的合约加入白名单存在巨大风险, 且永远不应被进行. 虽然在某些罕例中本种操作是可行的,
         但是除非您万分确认本次操作属于该种罕例, 否则请绝对不要继续本次操作.
         您是否依然确定要将本货币合约加入白名单?`
    ],
    //2
    [KEYS.PROMPT_SelectAccount]:[
        '选择账户',

        '选择您希望加入到本身份中的账户与权限. 您每次只能添加其中一个.'
    ],
    //2
    [KEYS.PROMPT_ClaimIdentity]:[
        '认领身份',

        '请为您的身份名添加与该公钥匹配的私钥.'
    ],

    //3
    [KEYS.REQUEST_AddNetwork]:[
        /*{DOMAIN}*/ '希望将他们的网络加入您的Scatter.',

        '有部分程序使用他们自己的网络.',

        `这不不赋予该程序介入您的Scatter的任何权限. 
         通过本界面添加网络，是单纯为了节省您的时间，以便您不需要再重返设置界面手工添加.`
    ],
    //5
    [KEYS.REQUEST_Identity]:[
        /*{DOMAIN}*/ '正在请求额外信息.',

        `某些时候程序会向您请求额外的个人信息，诸如邮箱、生日等. 现在您右侧的是您的列表中含有所请求信息的身份.`,

        `即使您的身份中含有多种信息，但各程序将永远不会看到除了所请求的个人信息之外的任何数据.`,

        `唯一总是公开可见的信息是公钥和钥名.`,

        /*{DOMAIN}*/ `未请求任何额外信息，唯一请求的信息是身份名与哈希.`
    ],
    //2
    [KEYS.REQUEST_IdentityNoIdentities]:[
        `您创建的身份不包含该程序所请求的信息.`,

        `如果您希望在该域中使用某身份，您将需要更新您的身份并满足其要求.
         您将在左侧面板找到该域的要求.`
    ],
    //4
    [KEYS.REQUEST_SignatureWhitelist]:[
        `您是否希望将该合约操作加入白名单?`,

        `您可以将该操作加入白名单以便之后不需要对其继续手工授权.
         所有显示check的属性都将进入可静音模式，意味您将允许该词数据交互的某些属性被更改，
         与此同时，只有在该次交互中的其他的属性被更改时，该白名单才会失效.`,

        `这包含了所需的个人信息, 并且对您身份的更改将不会移除已有的许可.`,

        `如果您拥有复数地址，当该次请求中需要一个地址时，您将总会收到一个授权跳窗.`
    ],
    //4
    [KEYS.REQUEST_ScatterIsLocked]:[
        `您的Scatter已上锁！`,

        `您必须在解锁后才能进行任何操作.`,

        `我们将有意地避免展示任何需要您进行登录的请求跳窗.`,

        `如果您遭遇任何需要您输入密码的请求跳窗，这很可能是一个骗取您密码的恶意操作.
         请总是通过点击Scatter图标，以正确登录Scatter并解锁. 不要相信任何需要您输入密码的跳窗.`
    ],
    //4
    [KEYS.REQUEST_UpdateVersion]:[
        `您的Scatter需要版本更新！`,

        /*{DOMAIN}*/ `正在请求您安装一个高于当前版本的新版Scatter.`,

        ` 这通常意味着新功能的发布，并且当前某程序希望使用某功能，而您的旧版本不支持该项功能.`,

        `请注意, 我们的版本检测是与程序的使用过程挂钩的. 某些程序或许会以此诱导您安装恶意内容. 
         请确保您只在正确的地址下载新的Scatter版本.`
    ],

}










