//import Buffer from 'buffer'

window.CONTRACT = {
  address: "0x1c1893A29e07e4Af8B0dD259c75025785d543468",
  network: "Example : https://polygon-rpc.com/",
  explore: "Example : https://polygonscan.com/",
  // Your Contract ABI
  abi:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_info",
          "type": "string"
        }
      ],
      "name": "add_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_ipfs",
          "type": "string"
        }
      ],
      "name": "addDocHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_newInfo",
          "type": "string"
        }
      ],
      "name": "alter_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "exporter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "AddHash",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        }
      ],
      "name": "delete_Exporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_hash",
          "type": "bytes32"
        }
      ],
      "name": "deleteHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "count_Exporters",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "count_hashes",
      "outputs": [
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_hash",
          "type": "bytes32"
        }
      ],
      "name": "findDocHash",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_add",
          "type": "address"
        }
      ],
      "name": "getExporterInfo",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
};

const contractAddress = "0x1c1893A29e07e4Af8B0dD259c75025785d543468"; // Replace with your contract address
const contractABI =[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_info",
				"type": "string"
			}
		],
		"name": "add_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "_ipfs",
				"type": "string"
			}
		],
		"name": "addDocHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_newInfo",
				"type": "string"
			}
		],
		"name": "alter_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "exporter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "AddHash",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "delete_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "deleteHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count_Exporters",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count_hashes",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "findDocHash",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getExporterInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Replace with your contract ABI

async function initContract() {
  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      window.web3 = web3;
      window.contract = new web3.eth.Contract(contractABI, contractAddress);
      window.userAddress = (await web3.eth.getAccounts())[0];
      console.log("Contract initialized:", window.contract);
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    console.error("No Ethereum provider detected. Install MetaMask.");
  }
}

// Call this function when your app initializes
//initContract();

//login
async function connect() {
  if (window.ethereum) {
    try {
      const selectedAccount = await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          return accounts[0];
        })
        .catch(() => {
          throw Error("No account selected ");
        });

      window.userAddress = selectedAccount;
      console.log(selectedAccount);
      window.localStorage.setItem("userAddress", window.userAddress);
      window.location.reload();
    } catch (error) {
      console.log("Error while connecting to wallet");
    }
  } else {
    $("#upload_file_button").attr("disabled", true);
    $("#doc-file").attr("disabled", true);
    // Show The Warning for not detecting wallet
    document.querySelector(".alert").classList.remove("d-none");
  }
}

window.onload = async () => {
  if (window.location.href.indexOf("verify.html") > -1) {
    $("#loader").hide();
    $(".loader-wraper").fadeOut("slow");

    //check the Url if it was Passed with document hash
    $("#upload_file_button").attr("disabled", true);
    checkURL();
  }

  $("#loginButton").hide();
  $("#recent-header").hide();
  $(".loader-wraper").fadeOut("slow");
  hide_txInfo();
  $("#upload_file_button").attr("disabled", true);

  window.userAddress = window.localStorage.getItem("userAddress");

  if (window.ethereum) {
    //gere we need MetaMask to read and write to our Contract
    window.web3 = new Web3(window.ethereum);
    window.contract = new window.web3.eth.Contract(
      window.CONTRACT.abi,
      window.CONTRACT.address
    );
    //checking if user loged in
    if (window.userAddress.length > 10) {
      // let isLocked =await window.ethereum._metamask.isUnlocked();
      //  if(!isLocked) disconnect();
      $("#logoutButton").show();
      $("#loginButton").hide();
      $("#userAddress")
        .html(`<i class="fa-solid fa-address-card mx-2 text-primary"></i>${truncateAddress(
        window.userAddress
      )}
       <a class="text-info" href="${window.CONTRACT.explore}/address/${
        window.userAddress
      }" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-square-arrow-up-right text-warning"></i></a>  
       </a>`);

      //if admin is viewed then show the doc,exporter counters
      if (window.location.pathname == "/admin.html") await getCounters();

      await getExporterInfo();
      await get_ChainID();
      await get_ethBalance();
      $("#Exporter-info").html(
        `<i class="fa-solid fa-building-columns mx-2 text-warning"></i>${window.info}`
      );

      setTimeout(() => {
        listen();
      }, 0);
    } else {
      $("#logoutButton").hide();
      $("#loginButton").show();
      $("#upload_file_button").attr("disabled", true);
      $("#doc-file").attr("disabled", true);
      $(".box").addClass("d-none");
      $(".loading-tx").addClass("d-none");
    }
  } else {
    //No metamask detected
    $("#logoutButton").hide();
    $("#loginButton").hide();
    $(".box").addClass("d-none");
    $("#upload_file_button").attr("disabled", true);
    $("#doc-file").attr("disabled", true);
    document.querySelector(".alert").classList.remove("d-none");

    // alert("Please download metamask extension first.\nhttps://metamask.io/download/");
    // window.location = "https://metamask.io/download/"
  }
};

/*

async function verify_Hash() {
  //Show the loading
  $("#loader").show();

  if (window.hashedfile) {
    /*   I used the contract address (window.CONTRACT.address) as the caller of the function 'findDocHash'
        you can use any address because it used just for reading info from the contract
    
    await contract.methods
      .findDocHash(window.hashedfile)
      .call({ from: window.userAddress })
      .then((result) => {
        $(".transaction-status").removeClass("d-none");
        window.newHash = result;
        if ((result[0] != 0) & (result[1] != 0)) {
          //Doc Verified
          print_verification_info(result, true);
        } else {
          //Doc not Verified
          print_verification_info(result, false);
        }
      });
  }
}

*/

async function verify_Hash() {
  const fileInput = document.getElementById("doc-file");
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    try {
      // Show the loading
      $("#loader").show();

      // Upload file to Pinata
      const pinataResponse = await uploadFileToPinata(file);
      if (pinataResponse) {
        const CID = pinataResponse.IpfsHash;
        console.log("File uploaded successfully to Pinata. CID:", CID);

        // Hash the file
        const reader = new FileReader();
        reader.onload = async function (event) {
          const fileContent = event.target.result;
          const hash = web3.utils.sha3(fileContent);
          window.hashedfile = hash;

          if (window.hashedfile) {
            // Use the contract address (window.CONTRACT.address) as the caller of the function 'findDocHash'
            await contract.methods
              .findDocHash(window.hashedfile)
              .call({ from: window.userAddress })
              .then((result) => {
                $(".transaction-status").removeClass("d-none");
                window.newHash = result;
                if ((result[0] != 0) & (result[1] != 0)) {
                  // Doc Verified
                  print_verification_info(result, true);
                } else {
                  // Doc not Verified
                  print_verification_info(result, false);
                }
              });
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.error("Failed to upload file to Pinata.");
        $("#loader").hide();
      }
    } catch (error) {
      console.error("Error uploading file to Pinata:", error);
      $("#loader").hide();
    }
  } else {
    console.error("No file selected for upload.");
  }
}


function checkURL() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  window.hashedfile = url.searchParams.get("hash");
  if (!window.hashedfile) return;

  verify_Hash();
}
// get Sha3 Hash from the file
async function get_Sha3() {
  $("#note").html(`<h5 class="text-warning">Hashing Your Document ...</h5>`);
  $("#upload_file_button").attr("disabled", false);
  console.log("file changed");
  var file = await document.getElementById("doc-file").files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = async function (evt) {
      // var SHA256 = new Hashes.SHA256();
      // = SHA256.hex(evt.target.result);
      window.hashedfile = await web3.utils.soliditySha3(evt.target.result);
      console.log(`Document Hash : ${window.hashedfile}`);
      $("#note").html(
        `<h5 class="text-center text-info">Document Hashed   </h5>`
      );
    };
    reader.onerror = function (evt) {
      console.log("error reading file");
      return false;
    };
  } else {
    window.hashedfile = null;
    return false;
  }
}


function print_verification_info(result, is_verified) {
  // Default Image for not Verified Documents
  document.getElementById("student-document").src = "./files/notvalid.svg";
  $("#loader").hide();

  if (!is_verified) {
    // When document is not verified
    $("#download-document").hide();
    $("#doc-status").html(`
      <h3 class="text-danger">
        Certificate not Verified 
        <i class="text-danger fa fa-times-circle" aria-hidden="true"></i>
      </h3>
    `);
    $("#file-hash").html(`
      <span class="text-info">
        <i class="fa-solid fa-hashtag"></i>
      </span> ${truncateAddress(window.hashedfile)}
    `);
    $("#college-name").hide();
    $("#contract-address").hide();
    $("#time-stamps").hide();
    $("#blockNumber").hide();
    $(".transaction-status").show();
  } else {
    // When document is verified
    $("#download-document").show();
    $("#college-name").show();
    $("#contract-address").show();
    $("#time-stamps").show();
    $("#blockNumber").show();

    var t = new Date(1970, 0, 1);
    t.setSeconds(result[1]);
    console.log(result[1]);
    t.setHours(t.getHours() + 3); // Adjusting timezone if necessary

    // Hide loader
    $("#loader").hide();
    $("#doc-status").html(`
      <h3 class="text-info">
        Certificate Verified Successfully 😊
        <i class="text-info fa fa-check-circle" aria-hidden="true"></i>
      </h3>
    `);
    $("#file-hash").html(`
      <span class="text-info">
        <i class="fa-solid fa-hashtag"></i>
      </span> ${truncateAddress(window.hashedfile)}
    `);
    $("#college-name").html(`
      <span class="text-info">
        <i class="fa-solid fa-graduation-cap"></i>
      </span> ${result[2]}
    `);
    $("#contract-address").html(`
      <span class="text-info">
        <i class="fa-solid fa-file-contract"></i>
      </span> ${truncateAddress(window.CONTRACT.address)}
    `);
    $("#time-stamps").html(`
      <span class="text-info">
        <i class="fa-solid fa-clock"></i>
      </span> ${t}
    `);
    $("#blockNumber").html(`
      <span class="text-info">
        <i class="fa-solid fa-cube"></i>
      </span> ${result[0]}
    `);
    document.getElementById("student-document").src = `https://ipfs.io/ipfs/${result[3]}`;
    document.getElementById("download-document").href = document.getElementById("student-document").src;
    $(".transaction-status").show();
  }
}

function truncateAddress(address) {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';
}


/*
function print_verification_info(result, is_verified) {
  //Default Image for not Verified Docunets
  document.getElementById("student-document").src = "./files/notvalid.svg";
  $("#loader").hide();
  // when document not verfied
  if (!is_verified) {
    // document.getElementById('download-document').classList.add('d-none')
    $("#download-document").hide();
    $("#doc-status").html(`<h3 class="text-danger">
        Certificate not Verified 
         <i class="text-danger  fa fa-times-circle" aria-hidden="true"></i>
        </h3>`);
    $("#file-hash").html(
      `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
        window.hashedfile
      )}`
    );
    $("#college-name").hide();
    $("#contract-address").hide();
    $("#time-stamps").hide();
    $("#blockNumber").hide();
    $(".transaction-status").show();
  } else {
    $("#download-document").show();
    // when document verfied
    $("#college-name").show();
    $("#contract-address").show();
    $("#time-stamps").show();
    $("#blockNumber").show();

    var t = new Date(1970, 0, 1);
    t.setSeconds(result[1]);
    console.log(result[1]);
    t.setHours(t.getHours() + 3);
    // hide loader
    $("#loader").hide();
    $("#doc-status").html(`<h3 class="text-info">
         Certificate Verified Successfully 😊
         <i class="text-info fa fa-check-circle" aria-hidden="true"></i>
        </h3>`);
    $("#file-hash").html(
      `<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(
        window.hashedfile
      )}`
    );
    $("#college-name").html(
      `<span class="text-info"><i class="fa-solid fa-graduation-cap"></i></span> ${result[2]}`
    );
    $("#contract-address").html(
      `<span class="text-info"><i class="fa-solid fa-file-contract"></i> </span>${truncateAddress(
        window.CONTRACT.address
      )}`
    );
    $("#time-stamps").html(
      `<span class="text-info"><i class="fa-solid fa-clock"></i> </span>${t}`
    );
    $("#blockNumber").html(
      `<span class="text-info"><i class="fa-solid fa-cube"></i></span> ${result[0]}`
    );
    document.getElementById(
      "student-document"
    ).src = `https://ipfs.io/ipfs/${result[3]}`;
    document.getElementById("download-document").href =
      document.getElementById("student-document").src;
    $(".transaction-status").show();
  }
}


*/
function hide_txInfo() {
  $(".transaction-status").addClass("d-none");
}

function show_txInfo() {
  $(".transaction-status").removeClass("d-none");
}
async function get_ethBalance() {
  await web3.eth.getBalance(window.userAddress, function (err, balance) {
    if (err === null) {
      $("#userBalance").html(
        "<i class='fa-brands fa-gg-circle mx-2 text-danger'></i>" +
          web3.utils.fromWei(balance).substr(0, 6) +
          ""
      );
    } else $("#userBalance").html("n/a");
  });
}

if (window.ethereum) {
  window.ethereum.on("accountsChanged", function (accounts) {
    connect();
  });
}

function printUploadInfo(result) {
  $("#transaction-hash").html(
    `<a target="_blank" title="View Transaction at Polygon Scan" href="${window.CONTRACT.explore}/tx/` +
      result.transactionHash +
      '"+><i class="fa fa-check-circle font-size-2 mx-1 text-white mx-1"></i></a>' +
      truncateAddress(result.transactionHash)
  );
  $("#file-hash").html(
    `<i class="fa-solid fa-hashtag mx-1"></i> ${truncateAddress(
      window.hashedfile
    )}`
  );
  $("#contract-address").html(
    `<i class="fa-solid fa-file-contract mx-1"></i> ${truncateAddress(
      result.to
    )}`
  );
  $("#time-stamps").html('<i class="fa-solid fa-clock mx-1"></i>' + getTime());
  $("#blockNumber").html(
    `<i class="fa-solid fa-link mx-1"></i>${result.blockNumber}`
  );
  $("#blockHash").html(
    `<i class="fa-solid fa-shield mx-1"></i> ${truncateAddress(
      result.blockHash
    )}`
  );
  $("#to-netowrk").html(
    `<i class="fa-solid fa-chart-network"></i> ${window.chainID}`
  );
  $("#to-netowrk").hide();
  $("#gas-used").html(
    `<i class="fa-solid fa-gas-pump mx-1"></i> ${result.gasUsed} Gwei`
  );
  $("#loader").addClass("d-none");
  $("#upload_file_button").addClass("d-block");
  show_txInfo();
  get_ethBalance();

  $("#note").html(`<h5 class="text-info">
   Transaction Confirmed to the BlockChain <i class="mx-2 text-info fa fa-check-circle" aria-hidden="true"></i>
   </h5>`);
  listen();
}

async function getFilebinInfo(filebinUrl, filebinId) {
  try {
    const response = await fetch(
      `https://api.pdfrest.com/resource/${window.hashedfile}?format=url`,
      {
        method: "GET",
        headers: {},
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to retrieve file information:",
        await response.text()
      );
    }

    const data = await response.json();
    console.log(data); // This should contain information about the uploaded file
    return data;
  } catch (error) {
    console.error("Error fetching file information:", error);
    throw error; // Re-throw for potential handling in calling code
  }
}
/*
async function uploadFileToIpfs() {
  const fileInput = document.getElementById("doc-file");
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  const projectId = "f6c7e835419e487eb190997ad7c05066";
  const projectSecret = "ibqAZTH0DDDDsYjQJC0dcCjNSPp7Wj1KV0ZjZvdpd2IHUoprRWUrOA";

  const xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

  xhr.open("POST", "https://ipfs.infura.io:5001/api/v0/add", true); // Open the connection
  xhr.setRequestHeader("Authorization", "Basic " + btoa(projectId + ":" + projectSecret)); // Set authorization header

  xhr.onreadystatechange = async function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const cid = response.Hash; // Get the CID from the response

        try {
          // Trigger MetaMask transaction after successful upload to IPFS
          await window.contract.methods
            .uploadFileToIpfs(cid)
            .send({ from: window.userAddress })
            .on("transactionHash", function (hash) {
              console.log("Transaction Hash:", hash);
              // You can add any UI update logic here
            })
            .on("receipt", function (receipt) {
              console.log("Receipt:", receipt);
              // You can add any UI update logic here
            })
            .on("confirmation", function (confirmationNr) {
              console.log("Confirmation:", confirmationNr);
              // You can add any UI update logic here
            })
            .on("error", function (error) {
              console.error("Error:", error.message);
              // You can add any UI update logic here
            });
        } catch (error) {
          console.error("Error:", error.message);
          // Handle any error that occurs during MetaMask transaction
        }
      } else {
        console.error("Error uploading file to IPFS. Status code:", xhr.status);
        // Handle error uploading file to IPFS
      }
    }
  };

  xhr.send(formData); // Send the form data
}

async function uploadFileToPinata(file) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  const apiKey = "9634d14038b62401b776"; // Replace with your Pinata API Key
  const secretApiKey = "238a9fd7c7291e934ae8a47dac37c92a60d73b4d744c258cb48d3a7df2d84e4a"; // Replace with your Pinata Secret API Key

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: {
      exampleKey: 'exampleValue'
    }
  });
  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  data.append('pinataOptions', pinataOptions);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'pinata_api_key': apiKey,
        'pinata_secret_api_key': secretApiKey
      },
      body: data
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response error text:', errorText);
      throw new Error('Failed to upload file to Pinata');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}*/
/*
async function uploadFileToPinata(file) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  const apiKey = "9634d14038b62401b776"; // Replace with your Pinata API Key
  const secretApiKey = "238a9fd7c7291e934ae8a47dac37c92a60d73b4d744c258cb48d3a7df2d84e4a"; // Replace with your Pinata Secret API Key

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: {
      exampleKey: 'exampleValue'
    }
  });
  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  data.append('pinataOptions', pinataOptions);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'pinata_api_key': apiKey,
        'pinata_secret_api_key': secretApiKey
      },
      body: data
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response error text:', errorText);
      throw new Error('Failed to upload file to Pinata');
    }

    const pinataResponse = await response.json();
    const CID = pinataResponse.IpfsHash;
    console.log("File uploaded successfully to Pinata. CID:", CID);

    // Trigger MetaMask transaction after successful upload to Pinata
    try {
      await window.contract.methods
        .uploadFileToIpfs(CID)
        .send({ from: window.userAddress })
        .on("transactionHash", function (hash) {
          console.log("Transaction Hash:", hash);
          // You can add any UI update logic here
        })
        .on("receipt", function (receipt) {
          console.log("Receipt:", receipt);
          // You can add any UI update logic here
        })
        .on("confirmation", function (confirmationNr) {
          console.log("Confirmation:", confirmationNr);
          // You can add any UI update logic here
        })
        .on("error", function (error) {
          console.error("Error:", error.message);
          // You can add any UI update logic here
        });
    } catch (error) {
      console.error("Error:", error.message);
      // Handle any error that occurs during MetaMask transaction
    }
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}

*/

async function uploadFileToPinata(file) {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  const apiKey = "9634d14038b62401b776"; // Replace with your Pinata API Key
  const secretApiKey = "238a9fd7c7291e934ae8a47dac37c92a60d73b4d744c258cb48d3a7df2d84e4a"; // Replace with your Pinata Secret API Key

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: {
      exampleKey: 'exampleValue'
    }
  });
  data.append('pinataMetadata', metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  data.append('pinataOptions', pinataOptions);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'pinata_api_key': apiKey,
        'pinata_secret_api_key': secretApiKey
      },
      body: data
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Response error text:', errorText);
      throw new Error('Failed to upload file to Pinata');
    }

    const pinataResponse = await response.json();
    const CID = pinataResponse.IpfsHash;
    console.log("File uploaded successfully to Pinata. CID:", CID);

    // Trigger MetaMask transaction after successful upload to Pinata
    try {
      await window.contract.methods
        .addDocHash(web3.utils.keccak256(CID), CID)
        .send({ from: window.userAddress })
        .on("transactionHash", function (hash) {
          console.log("Transaction Hash:", hash);
          // You can add any UI update logic here
        })
        .on("receipt", function (receipt) {
          console.log("Receipt:", receipt);
          // You can add any UI update logic here
        })
        .on("confirmation", function (confirmationNr) {
          console.log("Confirmation:", confirmationNr);
          // You can add any UI update logic here
        })
        .on("error", function (error) {
          console.error("Error:", error.message);
          // You can add any UI update logic here
        });
    } catch (error) {
      console.error("Error:", error.message);
      // Handle any error that occurs during MetaMask transaction
    }
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}

async function handleFileUpload() {
  const fileInput = document.getElementById("doc-file");
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    try {
      // Upload file to Pinata and handle MetaMask transaction
      await uploadFileToPinata(file);
    } catch (error) {
      console.error("Error uploading file to Pinata:", error);
    }
  } else {
    console.error("No file selected for upload.");
  }
}

// Initialize the contract when the app initializes
initContract();

/*

async function handleFileUpload() {
  const fileInput = document.getElementById("doc-file");
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    try {
      // Upload file to Pinata and handle MetaMask transaction
      await uploadFileToPinata(file);
    } catch (error) {
      console.error("Error uploading file to Pinata:", error);
    }
  } else {
    console.error("No file selected for upload.");
  }
}
*/

/*

// const panatainfo = {
//   API_Key: "25b6fb2635c0cfe79e67",
//   API_Secret:
//     "5f3d65b96aaf9ea793ad9f607d6b90fc2f66aa19fa887075939df910ec8f6389",
// };

// // Function to upload a file to Pinata
// const uploadFileToPinata = async (file) => {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const metadata = JSON.stringify({
//       name: file.name, // Set the name of the file as metadata
//     });
//     formData.append("pinataMetadata", metadata);

//     const options = JSON.stringify({
//       cidVersion: 0,
//     });
//     formData.append("pinataOptions", options);
//     const axios = require("axios");
//     const res = await axios.post(
//       "https://api.pinata.cloud/pinning/pinFileToIPFS",
//       formData,
//       {
//         maxBodyLength: "Infinity", // This is needed to prevent axios from erroring out with large files
//         headers: {
//           "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
//           Authorization: `Bearer ${panatainfo.API_Secret}`,
//         },
//       }
//     );
//     return res.data;
//   } catch (error) {
//     console.error("Error uploading file to Pinata:", error);
//     return null;
//   }
// };

// Function to handle file upload
async function handleFileUpload() {
  const fileInput = document.getElementById("doc-file");
  if (fileInput && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    try {
      // Upload file to Pinata
      const pinataResponse = await uploadFileToPinata(file);
      if (pinataResponse) {
        const CID = pinataResponse.IpfsHash;
        console.log("File uploaded successfully to Pinata. CID:", CID);
        // Optionally, handle additional actions after successful upload
        // e.g., updating UI, storing the CID in your database, etc.
      } else {
        console.error("Failed to upload file to Pinata.");
      }
    } catch (error) {
      console.error("Error uploading file to Pinata:", error);
    }
  } else {
    console.error("No file selected for upload.");
  }
}

*/


// Your other JavaScript functions and code

// Your other JavaScript functions and code

// Your other JavaScript functions and code

//delete document hash from the contract
//only the exporter who add it can delete it
async function deleteHash() {
  $("#loader").removeClass("d-none");
  $("#upload_file_button").slideUp();
  $("#note").html(`<h5 class="text-info">Please confirm the transaction </h5>`);
  $("#upload_file_button").attr("disabled", true);
  get_ChainID();

  if (window.hashedfile) {
    await window.contract.methods
      .deleteHash(window.hashedfile)
      .send({ from: window.userAddress })
      .on("transactionHash", function (hash) {
        $("#note").html(
          `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined </h5>`
        );
      })

      .on("receipt", function (receipt) {
        $("#note").html(
          `<h5 class="text-info p-1 text-center">Document Deleted </h5>`
        );

        $("#loader").addClass("d-none");
        $("#upload_file_button").slideDown();
      })

      .on("confirmation", function (confirmationNr) {
        console.log(confirmationNr);
      })
      .on("error", function (error) {
        console.log(error.message);
        $("#note").html(`<h5 class="text-center">${error.message}</h5>`);
        $("#loader").addClass("d-none");
        $("#upload_file_button").slideDown();
      });
  }
}

//get current time
function getTime() {
  let d = new Date();
  a =
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " - " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds();
  return a;
}

//get network name based on ID
async function get_ChainID() {
  let a = await web3.eth.getChainId();
  console.log(a);
  switch (a) {
    case 1:
      window.chainID = "Ethereum Main Network (Mainnet)";
      break;
    case 3:
      window.chainID = "Ropsten Test Network";
      break;
    case 4:
      window.chainID = "Rinkeby Test Network";
      break;
    case 5:
      window.chainID = "Goerli Test Network";
      break;
    case 42:
      window.chainID = "Kovan Test Network";
      break;
    case 56:
      window.chainID = "Binance Smart Chain Mainnet";
      break;
    case 97:
      window.chainID = "Binance Smart Chain Testnet";
      break;
    case 100:
      window.chainID = "xDai Chain";
      break;
    case 137:
      window.chainID = "Polygon Mainnet";
      break;
    case 80001:
      window.chainID = "Polygon Testnet";
      break;
    case 1000:
      window.chainID = "SePolia Network";
      break;
    default:
      window.chainID = "Unknown ChainID";
      break;
  }
  let network = document.getElementById("network");
  if (network) {
    document.getElementById(
      "network"
    ).innerHTML = `<i class="text-info fa-solid fa-circle-nodes mx-2"></i>${window.chainID}`;
  }
}

function get_Sha3()
{
  hide_txInfo();
  $("#note").html(`<h5 class="text-warning">Hashing Your Document ...</h5>`);
  $("#upload_file_button").attr("disabled", false);

  console.log("file changed");

  var fileInput = document.getElementById("doc-file");
  if (fileInput) {
    var file = fileInput.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
        window.hashedfile = web3.utils.soliditySha3(evt.target.result);
        console.log(`Document Hash : ${window.hashedfile}`);
        $("#note").html(
          `<h5 class="text-center text-info">Document Hashed</h5>`
        );
      };
      reader.onerror = function (evt) {
        console.log("Error reading file");
      };
    } else {
      window.hashedfile = null;
    }
  } else {
    console.error("File input element not found.");
    window.hashedfile = null;
  }
}

//logout
function disconnect() {
  $("#logoutButton").hide();
  $("#loginButton").show();
  window.userAddress = null;
  $(".wallet-status").addClass("d-none");
  window.localStorage.setItem("userAddress", null);
  $("#upload_file_button").addClass("disabled");
}

//shortcut wallet address
function truncateAddress(address) {
  if (!address) {
    return;
  }
  return `${address.substr(0, 7)}...${address.substr(
    address.length - 8,
    address.length
  )}`;
}

async function addExporter() {
  const address = document.getElementById("Exporter-address").value;
  const info = document.getElementById("info").value;

  if (info && address) {
    $("#loader").removeClass("d-none");
    $("#ExporterBtn").slideUp();
    $("#edit").slideUp();
    $("#delete").slideUp();
    $("#note").html(
      `<h5 class="text-info">Please confirm the transaction ...</h5>`
    );
    $("#ExporterBtn").attr("disabled", true);
    $("#delete").attr("disabled", true);
    $("#edit").attr("disabled", true);
    get_ChainID();

    try {
      await window.contract.methods
        .add_Exporter(address, info)
        .send({ from: window.userAddress })

        .on("transactionHash", function (hash) {
          $("#note").html(
            `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined ...</h5>`
          );
        })

        .on("receipt", function (receipt) {
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
          $("#edit").slideDown();
          $("#delete").slideDown();
          console.log(receipt);
          $("#note").html(
            `<h5 class="text-info">Exporter Added to the Blockchain </h5>`
          );
        })

        .on("confirmation", function (confirmationNr) {})
        .on("error", function (error) {
          console.log(error.message);
          $("#note").html(`<h5 class="text-center">${error.message}</h5>`);
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
        });
    } catch (error) {
      $("#note").html(`<h5 class="text-center">${error.message}</h5>`);
      $("#loader").addClass("d-none");
      $("#ExporterBtn").slideDown();
      $("#edit").slideDown();
      $("#delete").slideDown();
    }
  } else {
    $("#note").html(
      `<h5 class="text-center text-warning">You need to provide address & inforamtion to add  </h5>`
    );
  }
}

async function getExporterInfo() {
  await window.contract.methods
    .getExporterInfo(window.userAddress)
    .call({ from: window.userAddress })

    .then((result) => {
      window.info = result;
    });
}

async function getCounters() {
  await window.contract.methods
    .count_Exporters()
    .call({ from: window.userAddress })

    .then((result) => {
      $("#num-exporters").html(
        `<i class="fa-solid fa-building-columns mx-2 text-info"></i>${result}`
      );
    });
  await window.contract.methods
    .count_hashes()
    .call({ from: window.userAddress })

    .then((result) => {
      $("#num-hashes").html(
        `<i class="fa-solid fa-file mx-2 text-warning"></i>${result}`
      );
    });
}

async function editExporter() {
  const address = document.getElementById("Exporter-address").value;
  const info = document.getElementById("info").value;

  if (info && address) {
    $("#loader").removeClass("d-none");
    $("#ExporterBtn").slideUp();
    $("#edit").slideUp();
    $("#delete").slideUp();
    $("#note").html(
      `<h5 class="text-info">Please confirm the transaction 😴...</h5>`
    );
    $("#ExporterBtn").attr("disabled", true);
    get_ChainID();

    try {
      await window.contract.methods
        .alter_Exporter(address, info)
        .send({ from: window.userAddress })

        .on("transactionHash", function (hash) {
          $("#note").html(
            `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😇...</h5>`
          );
        })

        .on("receipt", function (receipt) {
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
          console.log(receipt);
          $("#note").html(
            `<h5 class="text-info">Exporter Updated Successfully 😊</h5>`
          );
        })

        .on("confirmation", function (confirmationNr) {})
        .on("error", function (error) {
          console.log(error.message);
          $("#note").html(`<h5 class="text-center">${error.message} 👍</h5>`);
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
        });
    } catch (error) {
      $("#note").html(`<h5 class="text-center">${error.message} 👍</h5>`);
      $("#loader").addClass("d-none");
      $("#ExporterBtn").slideDown();
      $("#edit").slideDown();
      $("#delete").slideDown();
    }
  } else {
    $("#note").html(
      `<h5 class="text-center text-warning">You need to provide address & inforamtion to update 😵‍💫 </h5>`
    );
  }
}

async function deleteExporter() {
  const address = document.getElementById("Exporter-address").value;

  if (address) {
    $("#loader").removeClass("d-none");
    $("#ExporterBtn").slideUp();
    $("#edit").slideUp();
    $("#delete").slideUp();
    $("#note").html(
      `<h5 class="text-info">Please confirm the transaction ...</h5>`
    );
    $("#ExporterBtn").attr("disabled", true);
    get_ChainID();

    try {
      await window.contract.methods
        .delete_Exporter(address)
        .send({ from: window.userAddress })

        .on("transactionHash", function (hash) {
          $("#note").html(
            `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined  ...</h5>`
          );
        })

        .on("receipt", function (receipt) {
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
          $("#edit").slideDown();
          $("#delete").slideDown();
          console.log(receipt);
          $("#note").html(
            `<h5 class="text-info">Exporter Deleted Successfully 🙂</h5>`
          );
        })
        .on("error", function (error) {
          console.log(error.message);
          $("#note").html(`<h5 class="text-center">${error.message} 🙂</h5>`);
          $("#loader").addClass("d-none");
          $("#ExporterBtn").slideDown();
          $("#edit").slideDown();
          $("#delete").slideDown();
        });
    } catch (error) {
      $("#note").html(`<h5 class="text-center">${error.message} 🙂</h5>`);
      $("#loader").addClass("d-none");
      $("#ExporterBtn").slideDown();
      $("#edit").slideDown();
      $("#delete").slideDown();
    }
  } else {
    $("#note").html(
      `<h5 class="text-center text-warning">You need to provide address to delete 👍</h5>`
    );
  }
}

// Generate QR code so any one an Verify the documents
//note: if you r using local server you need to replace 127.0.0.1 with your machine local ip address got from the router
function generateQRCode() {
  document.getElementById("qrcode").innerHTML = "";
  console.log("making qr-code...");
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  if (!window.hashedfile) return;
  let url = `${window.location.host}/verify.html?hash=${window.hashedfile}`;
  qrcode.makeCode(url);
  document.getElementById("download-link").download =
    document.getElementById("doc-file").files[0].name;
  document.getElementById("verfiy").href =
    window.location.protocol + "//" + url;

  function makeDownload() {
    document.getElementById("download-link").href =
      document.querySelector("#qrcode img").src;
  }
  setTimeout(makeDownload, 500);
  //  makeDownload();
}

//check old transaction and show them if exist
//Transactions in last afew hours will show but very old transactions wont show
// cuz the pastEvents returns transactions in last 999 block
async function listen() {
  console.log("started...");
  if (window.location.pathname != "/upload.html") return;
  document.querySelector(".loading-tx").classList.remove("d-none");
  window.web3 = new Web3(window.ethereum);
  window.contract = new window.web3.eth.Contract(
    window.CONTRACT.abi,
    window.CONTRACT.address
  );

  await window.contract.getPastEvents(
    "addHash",
    {
      filter: {
        _exporter: window.userAddress, //Only get the documents uploaded by current Exporter
      },
      fromBlock: (await window.web3.eth.getBlockNumber()) - 999,
      toBlock: "latest",
    },
    function (error, events) {
      printTransactions(events);
      console.log(events);
    }
  );
}

//If there is past tx then show them
function printTransactions(data) {
  document.querySelector(".transactions").innerHTML = "";
  document.querySelector(".loading-tx").classList.add("d-none");
  if (!data.length) {
    $("#recent-header").hide();
    return;
  }
  const main = document.querySelector(".transactions");
  for (let i = 0; i < data.length; i++) {
    const a = document.createElement("a");
    a.href = `${window.CONTRACT.explore}` + "/tx/" + data[i].transactionHash;
    a.setAttribute("target", "_blank");
    a.className =
      "col-lg-3 col-md-4 col-sm-5 m-2  bg-dark text-light rounded position-relative card";
    a.style = "overflow:hidden;";
    const image = document.createElement("object");
    image.style = "width:100%;height: 100%;";

    image.data = `https://ipfs.io/ipfs/${data[i].returnValues[1]}`;
    const num = document.createElement("h1");
    num.append(document.createTextNode(i + 1));
    a.appendChild(image);
    num.style =
      "position:absolute; left:4px; bottom: -20px;font-size:4rem; color: rgba(20, 63, 74, 0.35);";
    a.appendChild(num);
    main.prepend(a);
  }
  $("#recent-header").show();
}
