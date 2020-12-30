
/*2020/12/19 I also changes bill_of_ladbasic*/
var contractABI_bill_of_ladbasic = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "gross_weight",
        "type": "string"
      },
      {
        "name": "measurement",
        "type": "string"
      },
      {
        "name": "total_packages",
        "type": "string"
      },
      {
        "name": "place_and_date_of_issue",
        "type": "string"
      },
      {
        "name": "signed_for_the_carrier",
        "type": "string"
      }
    ],
    "name": "setBillofLadingfinal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "BLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBillofLadingtwo",
    "outputs": [
      {
        "name": "port_of_loading",
        "type": "string"
      },
      {
        "name": "port_of_discharge",
        "type": "string"
      },
      {
        "name": "freight_and_charges",
        "type": "string"
      },
      {
        "name": "final_destination",
        "type": "string"
      },
      {
        "name": "freight_payable_at",
        "type": "string"
      },
      {
        "name": "marks_numbers",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "BLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBillofLadingfinal",
    "outputs": [
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "gross_weight",
        "type": "string"
      },
      {
        "name": "measurement",
        "type": "string"
      },
      {
        "name": "total_packages",
        "type": "string"
      },
      {
        "name": "place_and_date_of_issue",
        "type": "string"
      },
      {
        "name": "signed_for_the_carrier",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "BLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBillofLadingone",
    "outputs": [
      {
        "name": "Importer",
        "type": "string"
      },
      {
        "name": "Exporter",
        "type": "string"
      },
      {
        "name": "notifyparty",
        "type": "string"
      },
      {
        "name": "pre_carriage_by",
        "type": "string"
      },
      {
        "name": "place_of_receipt",
        "type": "string"
      },
      {
        "name": "ocean_vessel_voy_no",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "BLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBillofLadingTime",
    "outputs": [
      {
        "name": "bill_of_lading_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "theTime",
        "type": "string"
      },
      {
        "name": "Importer",
        "type": "string"
      },
      {
        "name": "Exporter",
        "type": "string"
      },
      {
        "name": "notifyparty",
        "type": "string"
      },
      {
        "name": "pre_carriage_by",
        "type": "string"
      },
      {
        "name": "place_of_receipt",
        "type": "string"
      },
      {
        "name": "ocean_vessel_voy_no",
        "type": "string"
      }
    ],
    "name": "setBillofLadingone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "port_of_loading",
        "type": "string"
      },
      {
        "name": "port_of_discharge",
        "type": "string"
      },
      {
        "name": "freight_and_charges",
        "type": "string"
      },
      {
        "name": "final_destination",
        "type": "string"
      },
      {
        "name": "freight_payable_at",
        "type": "string"
      },
      {
        "name": "marks_numbers",
        "type": "string"
      }
    ],
    "name": "setBillofLadingtwo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "BLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBillofLadingDay",
    "outputs": [
      {
        "name": "bill_of_lading_day",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "bill_of_lading_day",
        "type": "string"
      }
    ],
    "name": "setBillofLadingDay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "bill_of_lading_time",
        "type": "string"
      }
    ],
    "name": "setBillofLadingTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "BLTransfer_addr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

var contractABI_product =[
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getProductone",
    "outputs": [
      {
        "name": "product_name",
        "type": "string"
      },
      {
        "name": "company_name",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "product_name",
        "type": "string"
      },
      {
        "name": "company_name",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      }
    ],
    "name": "setProductone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getupdateProductDay",
    "outputs": [
      {
        "name": "update_product_day",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getProductfinal",
    "outputs": [
      {
        "name": "number_and_date_of_invoice",
        "type": "string"
      },
      {
        "name": "certificate_number",
        "type": "string"
      },
      {
        "name": "company_address",
        "type": "string"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      },
      {
        "name": "product_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "update_product_day",
        "type": "string"
      }
    ],
    "name": "updateProductDay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "product_day",
        "type": "string"
      }
    ],
    "name": "setProductDay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getshippingorderone",
    "outputs": [
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "consignee",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getProducttwo",
    "outputs": [
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "exporter",
        "type": "string"
      },
      {
        "name": "consignee",
        "type": "string"
      },
      {
        "name": "means_of_transport_and_route",
        "type": "string"
      },
      {
        "name": "incoterns",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getupdateProductTime",
    "outputs": [
      {
        "name": "update_product_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      }
    ],
    "name": "getProductDay",
    "outputs": [
      {
        "name": "product_day",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "number_and_date_of_invoice",
        "type": "string"
      },
      {
        "name": "certificate_number",
        "type": "string"
      },
      {
        "name": "company_address",
        "type": "string"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      },
      {
        "name": "product_time",
        "type": "string"
      }
    ],
    "name": "setProductfinal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "update_product_time",
        "type": "string"
      }
    ],
    "name": "updateProductTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "receive_time",
        "type": "string"
      },
      {
        "name": "dispatch_time",
        "type": "string"
      },
      {
        "name": "receive_amount",
        "type": "uint256"
      },
      {
        "name": "dispatch_amount",
        "type": "uint256"
      },
      {
        "name": "dangerous_or_flammable_cargo",
        "type": "string"
      },
      {
        "name": "product_status",
        "type": "string"
      }
    ],
    "name": "updateProduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theProductnumber",
        "type": "uint256"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "exporter",
        "type": "string"
      },
      {
        "name": "consignee",
        "type": "string"
      },
      {
        "name": "means_of_transport_and_route",
        "type": "string"
      },
      {
        "name": "incoterns",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
        "type": "string"
      }
    ],
    "name": "setProducttwo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

var contractABI_letter_of_credit = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      },
      {
        "name": "application_date",
        "type": "string"
      },
      {
        "name": "commercial_invoice",
        "type": "string"
      },
      {
        "name": "confirmation",
        "type": "string"
      },
      {
        "name": "applicant",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
        "type": "string"
      },
      {
        "name": "start_end_point",
        "type": "string"
      },
      {
        "name": "method_of_info",
        "type": "string"
      }
    ],
    "name": "setLetterofCreditone",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      }
    ],
    "name": "getLetterofCreditthree",
    "outputs": [
      {
        "name": "validation_date",
        "type": "string"
      },
      {
        "name": "beneficiary_statement",
        "type": "string"
      },
      {
        "name": "transport",
        "type": "string"
      },
      {
        "name": "beneficiary",
        "type": "string"
      },
      {
        "name": "cargo_content",
        "type": "string"
      },
      {
        "name": "drawer",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      },
      {
        "name": "letter_of_credit_day",
        "type": "string"
      }
    ],
    "name": "setLetterOfCreditDay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      }
    ],
    "name": "getLetterofCreditfinal",
    "outputs": [
      {
        "name": "special_terms",
        "type": "string"
      },
      {
        "name": "bill_of_exchange_deadline",
        "type": "string"
      },
      {
        "name": "transfer_rules",
        "type": "string"
      },
      {
        "name": "letter_of_credit_day",
        "type": "string"
      },
      {
        "name": "letter_of_credit_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      }
    ],
    "name": "getLetterofCredittwo",
    "outputs": [
      {
        "name": "method_of_info",
        "type": "string"
      },
      {
        "name": "marine_insurance_policy",
        "type": "string"
      },
      {
        "name": "final_shipment",
        "type": "string"
      },
      {
        "name": "letter_of_credit_amount",
        "type": "string"
      },
      {
        "name": "other_documents",
        "type": "string"
      },
      {
        "name": "partial_shipment",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      },
      {
        "name": "transport",
        "type": "string"
      },
      {
        "name": "beneficiary",
        "type": "string"
      },
      {
        "name": "cargo_content",
        "type": "string"
      },
      {
        "name": "drawer",
        "type": "string"
      },
      {
        "name": "special_terms",
        "type": "string"
      },
      {
        "name": "bill_of_exchange_deadline",
        "type": "string"
      },
      {
        "name": "transfer_rules",
        "type": "string"
      }
    ],
    "name": "setLetterofCreditfinal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      },
      {
        "name": "marine_insurance_policy",
        "type": "string"
      },
      {
        "name": "final_shipment",
        "type": "string"
      },
      {
        "name": "letter_of_credit_amount",
        "type": "string"
      },
      {
        "name": "other_documents",
        "type": "string"
      },
      {
        "name": "partial_shipment",
        "type": "string"
      },
      {
        "name": "validation_date",
        "type": "string"
      },
      {
        "name": "beneficiary_statement",
        "type": "string"
      }
    ],
    "name": "setLetterofCredittwo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      },
      {
        "name": "letter_of_credit_time",
        "type": "string"
      }
    ],
    "name": "setLetterOfCreditTime",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theLCnumber",
        "type": "uint256"
      }
    ],
    "name": "getLetterofCreditone",
    "outputs": [
      {
        "name": "application_date",
        "type": "string"
      },
      {
        "name": "commercial_invoice",
        "type": "string"
      },
      {
        "name": "confirmation",
        "type": "string"
      },
      {
        "name": "applicant",
        "type": "string"
      },
      {
        "name": "bill_of_lading",
        "type": "string"
      },
      {
        "name": "start_end_point",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

var contractABI_route =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "newCountry",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_route_name",
        "type": "string"
      }
    ],
    "name": "newCountry",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_input_country_name",
        "type": "string"
      },
      {
        "name": "_output_country_name",
        "type": "string"
      }
    ],
    "name": "newroute",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "country_begin_name",
        "type": "string"
      },
      {
        "name": "country_end_name",
        "type": "string"
      }
    ],
    "name": "primitiveRoute",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_input_country_name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_output_country_name",
        "type": "string"
      }
    ],
    "name": "RouteCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from_country_name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "to_country_name",
        "type": "string"
      }
    ],
    "name": "RouteExists",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "NoRouteExists",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "curr_country_name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_route_name",
        "type": "string"
      }
    ],
    "name": "CountryDeliveredBy",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "str_one",
        "type": "string"
      },
      {
        "name": "str_two",
        "type": "string"
      }
    ],
    "name": "compareStrings",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "getCountry",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]; 


var contractABI_BLTransfer =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "request",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "showtheBL",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBLlength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "taketheStuff",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "thetime",
        "type": "string"
      }
    ],
    "name": "setBL",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "issueDO",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "loadingonShipNotification",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getBLMappingId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "accept",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBLMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "loadingonShip",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "bookingtheSeats",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "BLmapping_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "deliverBL",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "from_address",
        "type": "address"
      },
      {
        "name": "to_address",
        "type": "address"
      }
    ],
    "name": "getBL",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "BL",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "AccountyKey_addr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];


Web3 = require('web3');

var contractAddress_product = '0x57EF7ba38a4F0E45f844A09566D4b048287509ca';
var contractAddress_letter_of_credit = '0x4E6eD9af64e7A0b31eAFd9f96dB21C69cBc3D076';
var contractAddress_route = '0x58Ba991Fe89e21A83CfB1631234329A7943B3B30';
var contractAddress_BL_transfer = '0x525245f67Bd85BE93ABeC134c5b65420b9a4a538'; 
var contractAddress_bill_of_ladbasic = '0x52b6491e3eB93A6bCde24f2FDa17eec105Fd3258';

var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );

/*web3= new Web3();
const eventProvider = new Web3.providers.WebsocketProvider('ws://localhost:7545');
web3.setProvider(eventProvider);*/

/*var TransportPseudoRest = new web3.eth.Contract(contractABI,contractAddress);*/


/*This one is for the ProductPseudoRest contract*/ 
/*var ProductPseudoRest = new web3.eth.Contract(contractABI,contractAddress);*/
/*var Message = MessagePseudoRest.at(contractAddress);*/

var BLTransferPseudoRest = new web3.eth.Contract( contractABI_BLTransfer, contractAddress_BL_transfer);
var BillofladbasiconePseudoRest = new web3.eth.Contract( contractABI_bill_of_ladbasic, contractAddress_bill_of_ladbasic );
var ProductPseudoRest = new web3.eth.Contract( contractABI_product, contractAddress_product );
var LetterofCreditonePseudoRest = new web3.eth.Contract( contractABI_letter_of_credit, contractAddress_letter_of_credit );
var RoutePseudoRest = new web3.eth.Contract( contractABI_route, contractAddress_route );
var defaultGas = 4700000;

/*2020/12/8 add*/
var BL_list_index = 0;


/*2020/12/19 add*/
function setBillofLadingone(theBLnumber, theBLtime, Importer, Exporter, notifyparty,
  pre_carriage_by, place_of_receipt, ocean_vessel_voy_no){
    
  return BillofladbasiconePseudoRest.methods.setBillofLadingone(theBLnumber, theBLtime, Importer, Exporter, notifyparty,
  pre_carriage_by, place_of_receipt, ocean_vessel_voy_no).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}


function setLetterofCreditone(LCnumber, application_date, commercial_invoice,
  confirmation, applicant, bill_of_lading, start_end_point, method_of_info){

  return LetterofCreditonePseudoRest.methods.setLetterofCreditone(LCnumber, application_date, commercial_invoice,
  confirmation, applicant, bill_of_lading, start_end_point, method_of_info).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function setProductone(Pnumber, product_name, company_name,
  dispatch_time, receive_time, dispatch_amount, receive_amount){

  return ProductPseudoRest.methods.setProductone(Pnumber, product_name, company_name,
  dispatch_time, receive_time, dispatch_amount, receive_amount).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function setLittleBoL(Pnumber, product_name, company_name,
  dispatch_time, receive_time){

  return ProductPseudoRest.methods.seta_little_Billofladbasicone(Pnumber,
  product_name, company_name, dispatch_time, receive_time).send(
  {
    from:'0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}

function setBillofLadingtwo(BLnumber, port_of_loading, port_of_discharge, freight_and_charges,
  final_destination, freight_payable_at, marks_numbers){

  return BillofladbasiconePseudoRest.methods.setBillofLadingtwo(BLnumber, port_of_loading, port_of_discharge, freight_and_charges,
  final_destination, freight_payable_at, marks_numbers).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });

}

function setLetterofCredittwo(LCnumber, marine_insurance_policy, final_shipment, 
  letter_of_credit_amount, other_documents, partial_shipment, validation_date, beneficiary_statement){

  return LetterofCreditonePseudoRest.methods.setLetterofCredittwo(LCnumber, marine_insurance_policy, final_shipment, letter_of_credit_amount,
  other_documents, partial_shipment, validation_date, beneficiary_statement).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function setProducttwo(Pnumber, price, exporter,
  consignee, means_of_transport_and_route, incoterns, bill_of_lading){

  return ProductPseudoRest.methods.setProducttwo(Pnumber, price, exporter,
  consignee, means_of_transport_and_route, incoterns, bill_of_lading).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function setBillofLadingfinal(BLnumber, description, gross_weight, measurement,
  total_packages, place_and_date_of_issue, signed_for_the_carrier){

  return BillofladbasiconePseudoRest.methods.setBillofLadingfinal(BLnumber, description, gross_weight, measurement, 
    total_packages, place_and_date_of_issue, signed_for_the_carrier).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });
}

function setLetterofCreditfinal(LCnumber, transport, beneficiary, cargo_content, 
  drawer, special_terms, bill_of_exchange_deadline, transfer_rules){

  return LetterofCreditonePseudoRest.methods.setLetterofCreditfinal(LCnumber, transport, beneficiary, cargo_content,
  drawer, special_terms, bill_of_exchange_deadline, transfer_rules).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function setProductfinal(Pnumber, number_and_date_of_invoice, certificate_number,
  company_address, dangerous_or_flammable_cargo, product_status, product_registered_time){

  return ProductPseudoRest.methods.setProductfinal(Pnumber, number_and_date_of_invoice, certificate_number, 
    company_address, dangerous_or_flammable_cargo, product_status,product_registered_time).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });
}

function setProductday(Pnumber, product_registered_day){
  
  return ProductPseudoRest.methods.setProductDay(Pnumber, product_registered_day).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });

}

function setBillofLadingday(BLnumber, bill_of_lading_registered_day){

  return BillofladbasiconePseudoRest.methods.setBillofLadingDay(BLnumber, bill_of_lading_registered_day).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });  
}

function setBillofLadingtime(BLnumber, bill_of_lading_registered_time){

  return BillofladbasiconePseudoRest.methods.setBillofLadingTime(BLnumber, bill_of_lading_registered_time).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });
}

function setLetterOfCreditDay(BLnumber, letter_of_credit_registered_day){
  return LetterofCreditonePseudoRest.methods.setLetterOfCreditDay(BLnumber, letter_of_credit_registered_day).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }

    });
}

function setLetterOfCreditTime(BLnumber, letter_of_credit_registered_time){
  return LetterofCreditonePseudoRest.methods.setLetterOfCreditTime(BLnumber, letter_of_credit_registered_time).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){
        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }

    });
}

/*2020/7/7 add
目前正在加newCountry 和 checkCountryExistsorNot
並加入addRoute function 作為之後確認可以追溯*/

/*2020/7/21 檢查發現
addRoute function 裡有錯誤的地方
newCountry( _input_country_name, route_name)同時有兩個
一個是伴隨著route_name,一個是只有country_name*/

function newCountry(){

  var country_name = $("#queryproductexportcountryB").val();
  return RoutePseudoRest.methods.newCountry( country_name ).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){

        if(result){
          console.log("result %o",result);
        }
        else{
          console.log("Oops can not create the new country");
          console.log(error);
        }
    });
}

function newRoute(){

  /*2020/7/20 找到route_name, input_country_name. output_country_name 的東東*/
  var route_name = $("#queryproductroute").val();
  var input_country_name = $("#queryproductrouteexport").val();
  var output_country_name = $("#queryproductrouteimport").val();

  /*2020/7/7 add 如下的方法可以,但是需要試試看其他種的方法*/
  return RoutePseudoRest.methods.newroute( route_name, input_country_name, output_country_name).send(
    
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas:defaultGas
    }).then( function(error,result){

        if(result){
          console.log("Yeppp we create the new route good good!");
          console.log("result %o",result);
        }
        else{

          console.log(error);

        }
  });
}


function RouteEvent(){
    
    console.log("Are_you_ok");
    RoutePseudoRest.events.RouteCreated({

      fromBlock: 32
    },function(error, event){
      console.log("areee_you_okkk");
      console.log(event);
    })

}




/*2020/7/20 新加getCountry*/
function getCountry( country_name ){
    
    return RoutePseudoRest.methods.getCountry( country_name ).call().then(function(result){
      return result;
    });
    /*console.log("finish showing the user info");*/

}

async function checkCountryExistsorNot(){

    var country_name = $("#queryproductexportcountryB").val();
    let country_result_show = await getCountry( country_name );
    console.log("Yep we get the country result");
    console.log(country_result_show);

}



/*function primitiveRouteCheck(){


    var country_begin_name = $("#queryproductexportcountryB").val();
    var country_end_name = $("#queryproductimportcountryB").val();
    return RoutePseudoRest.methods.primitiveRoute( country_begin_name,country_end_name ).send(
    {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
    }).then( function(error,result){

      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
    });
}*/


/*function addRoute( _input_country_name, _output_country_name){

    if( !checkCountryExistsorNot(_input_country_name)   ){
        newCountry( _input_country_name );
        var route_name = _input_country_name + "_" + _output_country_name;
        newRoute(route_name, _input_country_name, _output_country_name);
        newCountry( _input_country_name, route_name);

    }
    else{
        var route_name = _input_country_name + "_" + _output_country_name;
        newRoute(route_name, _input_country_name, _output_country_name);
        newCountry( _input_country_name, route_name);
        /*console.log("The first country already exists");
    }
}*/


function checkEvent(){

    RoutePseudoRest.RouteCreated(function(err, result){

      if(error){
        console.log("OOps the final event checked is wrong");
        console.log("Error");
      }
      log("The Route was created by: " + result.args.who);

    });
    /*const filter = web3.eth.filter({

      fromBlock:0,
      toBlock: 'latest',
      address: '0xF4799B5d43bF682d9Fb70076C0a09B53c5B3C403',
      topics:

    })*/

    /*2020/07/09 once 的方法確定不能使用*/
    /*RoutePseudoRest.once('RouteExists',{

        filter: { myIndexedParam: ['菲律賓']},
        fromBlock: 20

      },function(error, event ){

        console.log(event);
        console.log("Goood stuff");
        console.log(error);
    });*/

}




function getbillofladingone(bill_of_lading_id){
  
  return BillofladbasiconePseudoRest.methods.getBillofLadingone(bill_of_lading_id).call().then( function(bill_of_lading_info){  
      return bill_of_lading_info;
  });
}

function getLetterofCreditone( letter_of_credit_id){

  return LetterofCreditonePseudoRest.methods.getLetterofCreditone( letter_of_credit_id ).call().then( function( letter_of_credit_info ){  
      return letter_of_credit_info;
  });
}

function getProductone( product_id){

  return ProductPseudoRest.methods.getProductone( product_id ).call().then( function( product_info ){  
      return product_info;
  });
}

/*2020/2/21 add*/
/*function getLittleBoLone( product_id){

  return ProductPseudoRest.methods.geta_little_Billofladbasicone( product_id ).call().then( function( little_bol_info ){  
      return little_bol_info;
  });
}*/

function getshippingorderone( product_id ){

  return ProductPseudoRest.methods.getshippingorderone(product_id).call().then( function( shipping_order_info ){
      return shipping_order_info;
  })
}



function getbillofladingtwo(bill_of_lading_id){
  
  return BillofladbasiconePseudoRest.methods.getBillofLadingtwo(bill_of_lading_id).call().then( function(bill_of_lading_info){  
      return bill_of_lading_info;
  });

}

function getLetterofCredittwo( letter_of_credit_id){

  return LetterofCreditonePseudoRest.methods.getLetterofCredittwo( letter_of_credit_id ).call().then( function( letter_of_credit_info ){  
      return letter_of_credit_info;
  });
}

function getProducttwo( product_id){

  return ProductPseudoRest.methods.getProducttwo( product_id ).call().then( function( product_info ){  
      return product_info;
  });
  
}




function getbillofladingfinal(bill_of_lading_id){
  
  return BillofladbasiconePseudoRest.methods.getBillofLadingfinal(bill_of_lading_id).call().then( function(bill_of_lading_info){  
      return bill_of_lading_info;
  });
}

function getLetterofCreditthree( letter_of_credit_id){

  return LetterofCreditonePseudoRest.methods.getLetterofCreditthree( letter_of_credit_id ).call().then( function( letter_of_credit_info ){  
      return letter_of_credit_info;
  });
}

function getLetterofCreditfinal( letter_of_credit_id){

  return LetterofCreditonePseudoRest.methods.getLetterofCreditfinal( letter_of_credit_id ).call().then( function( letter_of_credit_info ){  
      return letter_of_credit_info;
  });
}

function getProductfinal( product_id ){

  return ProductPseudoRest.methods.getProductfinal( product_id ).call().then( function( product_info ){  
      return product_info;
  });
}

function getProductDay( product_id ){

  return ProductPseudoRest.methods.getProductDay( product_id ).call().then( function( product_info){
      return product_info;
  });
}

function getupdateProductDay( product_id ){
  
  return ProductPseudoRest.methods.getupdateProductDay( product_id ).call().then( function( product_info){
      return product_info;
  });

}

function getupdateProductTime( product_id ){

  return ProductPseudoRest.methods.getupdateProductTime( product_id ).call().then( function( product_info){
      return product_info;
  });  
}

function getbillofladingday( bill_of_lading_id ){

  return BillofladbasiconePseudoRest.methods.getBillofLadingDay( bill_of_lading_id ).call().then( function(bill_of_lading_info){
      return bill_of_lading_info;
  });
}

function getbillofladingtime( bill_of_lading_id ){

  return BillofladbasiconePseudoRest.methods.getBillofLadingTime( bill_of_lading_id ).call().then( function(bill_of_lading_info){
      return bill_of_lading_info;
  });

}




function showbillofladinginfoone(bill_of_lading_info_one){

    var importer = bill_of_lading_info_one["Importer"];
    var exporter = bill_of_lading_info_one["Exporter"];
    var notifyparty = bill_of_lading_info_one["notifyparty"];
    var pre_carriage_by = bill_of_lading_info_one["pre_carriage_by"];
    var place_of_receipt = bill_of_lading_info_one["place_of_receipt"];
    var oceanvesselno = bill_of_lading_info_one["ocean_vessel_voy_no"];
    $('#importerA').append(importer);
    $('#exporterA').append(exporter);
    $('#notifypartyA').append(notifyparty);
    $('#precarriagebyA').append(pre_carriage_by);
    $('#placeofreceiptA').append(place_of_receipt);
    $('#oceanvesselA').append(oceanvesselno);

}

function showLetterofCreditinfoone( letter_of_credit_info_one ){

    var application_date = letter_of_credit_info_one["application_date"];
    var commercial_invoice = letter_of_credit_info_one["commercial_invoice"];
    var confirmation= letter_of_credit_info_one["confirmation"];
    var applicant = letter_of_credit_info_one["applicant"];
    var bill_of_lading = letter_of_credit_info_one["bill_of_lading"];
    var start_end_point = letter_of_credit_info_one["start_end_point"];

    $('#applicationdateD').append( application_date );
    $('#commercialinvoiceD').append( commercial_invoice );
    $('#confirmationD').append( confirmation );
    $('#applicantD').append( applicant );
    $('#billofladingD').append( bill_of_lading );
    $('#startendpointD').append( start_end_point );

}

function showProductinfoone( product_info_one ){

    var product_name = product_info_one["product_name"];
    var company_name = product_info_one["company_name"];
    var dispatch_time = product_info_one["dispatch_time"];
    var receive_time = product_info_one["receive_time"];
    var dispatch_amount = product_info_one["dispatch_amount"];
    var receive_amount = product_info_one["receive_amount"];

    $('#productNameB').append( product_name );
    $('#companyNameB').append( company_name );
    $('#dispatchTimeB').append( dispatch_time );
    $('#receiveTimeB').append( receive_time );
    $('#dispatchAmountB').append( dispatch_amount );
    $('#receiveAmountB').append( receive_amount );

}


function showshippingorderone( shipping_order_info_one ){

    var dangerous_or_flammable_cargo =  shipping_order_info_one["dangerous_or_flammable_cargo"];
    var consignee =  shipping_order_info_one["consignee"];
    $('#consigneefromproductC').append( consignee );
    $('#dangerousorflammablecargofromproductC').append( dangerous_or_flammable_cargo );
}





function showbillofladinginfotwo(bill_of_lading_info_two){
    
    
    var port_of_loading = bill_of_lading_info_two["port_of_loading"];
    var port_of_discharge = bill_of_lading_info_two["port_of_discharge"];
    var freight_and_charges = bill_of_lading_info_two["freight_and_charges"];
    var final_destination = bill_of_lading_info_two["final_destination"];
    var freight_payable_at = bill_of_lading_info_two["freight_payable_at"];
    var marks_numbers = bill_of_lading_info_two["marks_numbers"];
    $('#portofloadingA').append(port_of_loading);
    $('#portofdischargeA').append(port_of_discharge);
    $('#freightandchargesA').append(freight_and_charges);
    $('#finaldestinationA').append(final_destination);
    $('#freightpayableatA').append(freight_payable_at);
    $('#marksandnumbersA').append(marks_numbers);

}

function showLetterofCreditinfotwo( letter_of_credit_info_two ){

    var method_of_info = letter_of_credit_info_two ['method_of_info'];
    var marine_insurance_policy = letter_of_credit_info_two["marine_insurance_policy"];
    var final_shipment = letter_of_credit_info_two["final_shipment"];
    var letter_of_credit_amount = letter_of_credit_info_two["letter_of_credit_amount"];
    var other_documents = letter_of_credit_info_two["other_documents"];
    var partial_shipment = letter_of_credit_info_two["partial_shipment"];


    var validation_date = letter_of_credit_info_two ["validation_date"];
    var beneficiary_statement = letter_of_credit_info_two["beneficiary_statement"];
    
    $('#methodofinfoD').append(method_of_info);
    $('#marineinsurancepolicyD').append(marine_insurance_policy);
    $('#finalshipmentD').append(final_shipment);
    $('#letterofcreditamountD').append(letter_of_credit_amount);
    $('#otherdocumentsD').append(other_documents);
    $('#partialshipmentD').append(partial_shipment);

}

function showProductinfotwo( product_info_two ){

    var price = product_info_two["price"];
    var exporter = product_info_two["exporter"];
    var consignee = product_info_two["consignee"];
    var means_of_transport_and_route = product_info_two["means_of_transport_and_route"];
    var incoterns = product_info_two["incoterns"];
    var bill_of_lading = product_info_two["bill_of_lading"];

    $('#priceB').append( price );
    $('#exporterB').append( exporter );
    $('#consigneeB').append( consignee );
    $('#meansoftransportandrouteB').append( means_of_transport_and_route );
    $('#incoternsB').append( incoterns );
    $('#billofladingB').append( bill_of_lading );

}





function showLetterofCreditinfothree( letter_of_credit_info_three ){

    var validation_date = letter_of_credit_info_three ["validation_date"];
    var beneficiary_statement = letter_of_credit_info_three["beneficiary_statement"];
    var transport = letter_of_credit_info_three ["transport"];
    var beneficiary = letter_of_credit_info_three ["beneficiary"];
    var cargo_content = letter_of_credit_info_three ["cargo_content"];
    var drawer = letter_of_credit_info_three ["drawer"];
    $('#validationdateD').append(validation_date);
    $('#beneficiarystatementD').append(beneficiary_statement);
    $('#transportD').append( transport );
    $('#beneficiaryD').append( beneficiary );
    $('#cargocontentD').append( cargo_content );
    $('#drawerD').append( drawer );
}

function showbillofladinginfofinal( bill_of_lading_info_final){

    var description  = bill_of_lading_info_final["description"];
    var gross_weight = bill_of_lading_info_final["gross_weight"];
    var measurement = bill_of_lading_info_final["measurement"];
    var total_packages = bill_of_lading_info_final["total_packages"];
    var place_and_date_of_issue = bill_of_lading_info_final["place_and_date_of_issue"];
    var signed_for_the_carrier = bill_of_lading_info_final["signed_for_the_carrier"];
    $("#descriptionA").append(description);
    $("#grossweightA").append(gross_weight);
    $("#measurementA").append(measurement);
    $('#totalpackagesA').append(total_packages);
    $("#placeanddateofissueA").append(place_and_date_of_issue);
    $("#signedforthecarrierA").append(signed_for_the_carrier);
}

function showLetterofCreditinfofinal( letter_of_credit_info_final ){

    var special_terms = letter_of_credit_info_final ["special_terms"];
    var bill_of_exchange_deadline = letter_of_credit_info_final["bill_of_exchange_deadline"]
    var transfer_rules = letter_of_credit_info_final["transfer_rules"]
    var letter_of_credit_day = letter_of_credit_info_final["letter_of_credit_day"];
    var letter_of_credit_time = letter_of_credit_info_final["letter_of_credit_time"];


    $('#specialtermsD' ).append( special_terms );
    $('#billofexchangedeadlineD' ).append( bill_of_exchange_deadline );
    $('#transferrulesD').append( transfer_rules );
    $('#letterofcreditdayD').append( letter_of_credit_day);
    $('#letterofcredittimeD').append( letter_of_credit_time);

}

function showProductinfofinal( product_info_final ){

    var number_and_date_of_invoice = product_info_final["number_and_date_of_invoice"];
    var certificate_number = product_info_final["certificate_number"];
    var company_address = product_info_final["company_address"];
    var dangerous_or_flammable_cargo = product_info_final["dangerous_or_flammable_cargo"];
    var product_status = product_info_final["product_status"];
    var product_registered_time = product_info_final["product_time"];

    $('#numberanddateofinvoiceB').append(number_and_date_of_invoice);
    $('#certificatenumberB').append(certificate_number);
    $('#companyaddressB').append(company_address);
    $('#dangerousorflammablecargoB').append(dangerous_or_flammable_cargo);
    $('#productstatusB').append( product_status);
    $('#productregisteredtimeB').append( product_registered_time );

}

function showProductDay( product_day_info ){

    console.log("Find the right one");
    var product_registered_day = product_day_info;
    console.log( product_registered_day );
    $('#productregistereddayB').append( product_registered_day );

}

function showupdateProductDay( updated_product_day_info ){

    var updated_product_day = updated_product_day_info;
    $('#productupdateddayB').append( updated_product_day );

}

function showupdateProductTime( updated_product_day_time ){

    var updated_product_time = updated_product_day_time;
    $('#productupdatedtimeB').append( updated_product_time );

}


function showbillofladinginfoday( bill_of_lading_info_day ){

    /*console.log("Find the bill of lading day right one");*/
    var bill_of_lading_registered_day = bill_of_lading_info_day;
    /*console.log( bill_of_lading_registered_day );*/
    $('#billofladingregistereddayA').append( bill_of_lading_registered_day );

}

function showbillofladinginfotime( bill_of_lading_info_time ){

    /*console.log("Find the bill of lading time right one");*/
    var bill_of_lading_registered_time = bill_of_lading_info_time;
    /*console.log( bill_of_lading_registered_time );*/
    $('#billofladingregisteredtimeA').append( bill_of_lading_registered_time );

}

function clearBillofLadinginfo(){

    $('#shipperA').html("");
    $('#consigneeA').html("");
    $('#notifypartyA').html("");
    $('#precarriagebyA').html("");
    $('#placeofreceiptA').html("");
    $('#oceanvesselA').html("");
    $('#portofloadingA').html("");
    $('#portofdischargeA').html("");
    $('#freightandchargesA').html("");
    $('#finaldestinationA').html("");
    $('#freightpayableatA').html("");
    $('#marksandnumbersA').html("");
    $('#descriptionA').html("");
    $('#grossweightA').html("");
    $('#measurementA').html("");
    $('#totalpackagesA').html("");
    $('#placeanddateofissueA').html("");
    $('#signedforthecarrierA').html("");
    $('#billofladingregisteredtimeA').html("");
    $('#billofladingregistereddayA').html("");

    console.log("finish clearing the bill of lading info");

}
/*0212 寫的code*/
/*這個function 是用來清除查詢後顯示的product資料*/
/* empty 不是要再搜尋其他的*/
function clearProductinfo(){


    $('#productNameB').html("");
    $('#companyNameB').html("");
    $('#dispatchTimeB').html("");
    $('#receiveTimeB').html("");
    $('#dispatchAmountB').html("");
    $('#receiveAmountB').html("");
    $('#priceB').html("");
    $('#exporterB').html("");
    $('#consigneeB').html("");
    $('#meansoftransportandrouteB').html("");
    $('#incoternsB').html("");
    $('#billofladingB').html("");
    $('#numberanddateofinvoiceB').html("");
    $('#certificatenumberB').html("");
    $('#companyaddressB').html("");
    $('#dangerousorflammablecargoB').html("");
    $('#productstatusB').html("");
    $('#productregisteredtimeB').html("");
    $('#productregistereddayB').html("");

    $('#productupdatedtimeB').html("");
    $('#productupdateddayB').html("");

    console.log("finish clearing the product info");
}


function clearLetterofCreditinfo(){
    
    $('#applicationdateD').html("");
    $('#commercialinvoiceD').html("");
    $('#confirmationD').html("");
    $('#applicantD').html("");
    $('#billofladingD').html("");
    $('#startendpointD').html("");
    $('#methodofinfoD').html("");
    $('#marineinsurancepolicyD').html("");
    $('#finalshipmentD').html("");
    $('#letterofcreditamountD').html("");
    $('#otherdocumentsD').html("");
    $('#partialshipmentD').html("");
    $('#validationdateD').html("");
    $('#beneficiarystatementD').html("");
    $('#transportD').html("");
    $('#beneficiaryD').html("");
    $('#cargocontentD').html("");
    $('#drawerD').html("");
    $('#specialtermsD').html("");
    $('#billofexchangedeadlineD').html("");
    $('#transferrulesD').html("");

    console.log("finish clearing the letter of credit info");
}



async function addBilloflading(result){


    var bill_of_lading_id = parseInt(result);
    var importer = $("#addImporterA").val();
    var exporter  = $("#addExporterA").val();
    var notify_party = $("#addNotifyPartyA").val();
    var pre_carriage_by = $("#addPreCarriageByA").val();
    var place_of_receipt = $("#addPlaceofReceiptA").val();
    var ocean_vessel_voy_no = $("#addOceanVesselVoyNoA").val();

    var port_of_loading = $("#addPortofLoadingA").val();
    var port_of_discharge = $("#addPortofDischargeA").val();
    var freight_and_charges = $("#addFreightandChargesA").val();
    var final_destination = $("#addFinalDestinationA").val();
    var freight_payable_at = $("#addFreightPayableAtA").val();
    var marks_numbers = $("#addMarksandNumbersA").val();

    var description = $("#addDescriptionA").val();
    var gross_weight = $("#addGrossWeightA").val();
    var measurement = $("#addMeasurementA").val();
    var total_packages = $("#addTotalPackagesA").val();
    var place_and_date_of_issue = $("#addPlaceandDateofIssueA").val();
    var signed_for_the_carrier = $("#addSignedfortheCarrierA").val();

    const time_now = Date.now();
    var current_time = new Date( time_now );

    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();

    var bill_of_lading_registered_day = cur_day + "/" + cur_month + "/" + cur_year;
    var bill_of_lading_registered_time = current_time.toTimeString();
    
    let bill_one = await setBillofLadingone(bill_of_lading_id, bill_of_lading_registered_time, importer, exporter, notify_party, pre_carriage_by, place_of_receipt, ocean_vessel_voy_no);
    let bill_two = await setBillofLadingtwo(bill_of_lading_id, port_of_loading, port_of_discharge, freight_and_charges, final_destination, freight_payable_at, marks_numbers);
    let bill_final = await setBillofLadingfinal(bill_of_lading_id, description, gross_weight, measurement, total_packages, place_and_date_of_issue, signed_for_the_carrier);
    let bill_final_day = await setBillofLadingday(bill_of_lading_id, bill_of_lading_registered_day);
    let bill_final_time = await setBillofLadingtime(bill_of_lading_id, bill_of_lading_registered_time);

    console.log("OK_one");
    console.log(bill_one);

    console.log("OK_two");
    console.log(bill_two);

    console.log("OK_three");
    console.log(bill_final);

    console.log("Ok_four");
    console.log( bill_final_day );

    console.log("Ok_five");
    console.log( bill_final_time );

    /*2020/12/11 add*/
    let number_of_bol = await getBLlength();
    console.log("What_is_the_val_of_bill_of_ladings_length");
    console.log(number_of_bol);
}

async function getBillofladingafteradd(){

    var bill_of_lading_id = $("#BillofladingCodeA").val();
    let bill_of_lading_info_one = await getbillofladingone( bill_of_lading_id );
    let bill_of_lading_info_two = await getbillofladingtwo( bill_of_lading_id );
    let bill_of_lading_info_final = await getbillofladingfinal( bill_of_lading_id );
    let bill_of_lading_info_day = await getbillofladingday(bill_of_lading_id);
    let bill_of_lading_info_time = await getbillofladingtime(bill_of_lading_id);

    showbillofladinginfoone(bill_of_lading_info_one);
    showbillofladinginfotwo(bill_of_lading_info_two);
    showbillofladinginfofinal(bill_of_lading_info_final);
    showbillofladinginfoday( bill_of_lading_info_day );
    showbillofladinginfotime( bill_of_lading_info_time );

}

async function addLetterofcredit(result){

    var letter_of_credit_id = parseInt(result);
    var application_date = $("#addapplicationdateD").val();
    var commercial_invoice = $("#addcommercialinvoiceD").val();
    var confirmation = $("#addconfirmationD").val();
    var applicant = $("#addapplicantD").val();
    var bill_of_lading = $("#addbillofladingD").val();
    var start_end_point = $("#addstartendpointD").val();
    var method_of_info = $("#addmethodofinfoD").val();
    var marine_insurance_policy = $("#addmarineinsurancepolicyD").val();
    var final_shipment = $("#addfinalshipmentD").val();
    var letter_of_credit_amount = $("#addletterofcreditamountD").val();
    var other_documents = $("#addotherdocumentsD").val();
    var partial_shipment = $("#addpartialshipmentD").val();
    var validation_date = $("#addvalidationdateD").val();
    var beneficiary_statement = $("#addbeneficiarystatementD").val();
    var transport = $("#addtransportD").val();
    var beneficiary = $("#addbeneficiaryD").val();
    var cargo_content = $("#addcargocontentD").val();
    var drawer = $("#adddrawerD").val(); 
    var special_terms = $("#addspecialtermsD").val();
    var bill_of_exchange_deadline = $("#addbillofexchangedeadlineD").val();
    var transfer_rules = $("#addtransferrulesD").val();

    const time_now = Date.now();
    var current_time = new Date( time_now );

    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();

    var letter_of_credit_registered_day = cur_day + "/" + cur_month + "/" + cur_year;
    var letter_of_credit_registered_time = current_time.toTimeString();

    let letter_of_credit_one = await setLetterofCreditone(letter_of_credit_id, application_date, commercial_invoice, confirmation, applicant, bill_of_lading, start_end_point, method_of_info);
    let letter_of_credit_two = await setLetterofCredittwo(letter_of_credit_id, marine_insurance_policy, final_shipment, letter_of_credit_amount, other_documents, partial_shipment, validation_date,beneficiary_statement);
    let letter_of_credit_final = await setLetterofCreditfinal(letter_of_credit_id, transport, beneficiary, cargo_content, drawer, special_terms, bill_of_exchange_deadline, transfer_rules);
    let letter_of_credit_day = await setLetterOfCreditDay(letter_of_credit_id, letter_of_credit_registered_day);
    let letter_of_credit_time = await setLetterOfCreditTime( letter_of_credit_id, letter_of_credit_registered_time);

    console.log("OK_one");
    console.log(letter_of_credit_one);

    console.log("OK_two");
    console.log(letter_of_credit_two);

    console.log("OK_three");
    console.log(letter_of_credit_final);

}

async function getLetterofcreditafteradd(){

    var letter_of_credit_id = $("#letterofcreditCodeD").val();
    let letter_of_credit_info_one = await getLetterofCreditone( letter_of_credit_id );
    let letter_of_credit_info_two = await getLetterofCredittwo( letter_of_credit_id );
    let letter_of_credit_info_three = await getLetterofCreditthree( letter_of_credit_id );
    let letter_of_credit_info_final = await getLetterofCreditfinal( letter_of_credit_id );


    showLetterofCreditinfoone( letter_of_credit_info_one  );
    showLetterofCreditinfotwo( letter_of_credit_info_two  );
    showLetterofCreditinfothree( letter_of_credit_info_three );
    showLetterofCreditinfofinal( letter_of_credit_info_final );

    console.log("finish showing the letter_of_credit info");
    console.log("finish clearing");

}

/*2020/3/27 號在addProduct 裡新增current timestamp,
並且放置在setProductFinal */
/*2020/4/14 號這邊的result 是從showProductDialog promise 傳來的result*/

/*2020/7/7 號在addProduct 裡新增export country 和import country*/
/*並透過Route 的smart contract 來新增關於importer和exporter的country*/
async function addProduct(result){


    var product_id = parseInt(result);
    var product_name= $("#addproductnameB").val();
    var company_name = $("#addcompanynameB").val();
    var dispatch_time = $("#adddispatchtimeB").val();
    var receive_time = $("#addreceivetimeB").val();
    var dispatch_amount = $("#adddispatchamountB").val();
    var receive_amount = $("#addreceiveamountB").val();
    var price = $("#addpriceB").val();
    var exporter = $("#addexporterB").val();
    var consignee = $("#addconsigneeB").val();
    var means_of_transport_and_route = $("#addmeansoftransportandrouteB").val();
    var incoterns = $("#addincoternsB").val();
    var bill_of_lading = $("#addbillofladingB").val();
    var number_and_date_of_invoice = $("#addnumberanddateofinvoiceB").val();
    var certificate_number = $("#addcertificatenumberB").val();
    var company_address = $("#addcompanyaddressB").val();
    var dangerous_or_flammable_cargo = $("#adddangerousorflammablecargoB").val();
    var product_status = $("#addproductstatusB").val();
    var export_country = $("#addproductexportcountryB").val();
    var import_country = $("#addproductimportcountryB").val();

    const time_now = Date.now();
    /*console.log("Time now");
    console.log(time_now);*/
    /*const time_now_milliseonds = Math.floor(time_now / 1000);*/
    /*console.log("In milliseconds");
    console.log(time_now_milliseonds);*/

    var current_time = new Date( time_now );

    /*此為string concateneate 的功能,確定可以使用*/
    /*var good_apple = "Where are you" + "/" + "my friend";*/

    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();
    
    var product_registered_day = cur_day + "/" + cur_month + "/" + cur_year;

    console.log("Current Day");
    console.log(product_registered_day);

    var product_registered_time = current_time.toTimeString();
    let product_one = await setProductone( product_id, product_name, company_name, dispatch_time, receive_time, dispatch_amount, receive_amount);
    let product_two = await setProducttwo( product_id, price, exporter, consignee, means_of_transport_and_route, incoterns, bill_of_lading);
    let product_final = await setProductfinal( product_id, number_and_date_of_invoice, certificate_number, company_address, dangerous_or_flammable_cargo, product_status, product_registered_time);
    let product_final_day = await setProductday( product_id, product_registered_day);
    /*let product_route = await addRoute( export_country, import_country);*/
    console.log("OK_one");
    console.log( product_one );

    console.log("OK_two");
    console.log( product_two );

    console.log("OK_three");
    console.log( product_final );

    console.log("Ok_four");
    console.log( product_final_day);

}




/*因為多加了timestamp, 因此需要在 getProductfinal 和 showProductinfofinal 那邊加東西
因為getProductfinal 已經在remix編輯器裡改過了,所以不需要考慮*/
async function getProductafteradd(){

    var product_id = $("#productCodeB").val();
    let product_info_one = await getProductone( product_id );
    let product_info_two = await getProducttwo( product_id );
    let product_info_final = await getProductfinal( product_id );
    let product_day_info = await getProductDay(product_id);

    let updated_product_day_info = await getupdateProductDay( product_id );
    let updated_product_day_time = await getupdateProductTime( product_id);


    let show_product_info_one = await showProductinfoone( product_info_one );
    let show_product_info_two = await showProductinfotwo( product_info_two );
    let show_product_info_final = await showProductinfofinal( product_info_final );
    let show_product_day = await showProductDay( product_day_info );

    let show_updated_product_day_info = showupdateProductDay( updated_product_day_info );
    let show_updated_product_time_info = showupdateProductTime( updated_product_day_time );

    console.log("finish showing the product info");
    /*let clear = await clearProductinfo();
    console.log("finish clearing");*/

}

async function getshippingorderafteradd(){

    var product_id = $("#shippingorderfromproductC").val();
    let shipping_order_info_one = await getshippingorderone( product_id );
    let show_shipping_order_info_one = await showshippingorderone( shipping_order_info_one );
    console.log("finish showing the shipping order info");

}


function changeProduct(Pnumber, receive_time, dispatch_time,
  receive_amount, dispatch_amount, dangerous_or_flammable_cargo,product_status){

  return ProductPseudoRest.methods.updateProduct(Pnumber, receive_time, dispatch_time,
  receive_amount, dispatch_amount, dangerous_or_flammable_cargo,product_status).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function updateProductDay(Pnumber, updated_product_registered_day){

  return ProductPseudoRest.methods.updateProductDay(Pnumber, updated_product_registered_day).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

function updateProductTime(Pnumber, updated_product_registered_time){

  return ProductPseudoRest.methods.updateProductTime(Pnumber, updated_product_registered_time).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}

async function updateProduct(){

    var product_id = $("#productidupdateB").val();
    var receive_time = $("#receivetimeupdateB").val();
    var dispatch_time = $("#dispatchtimeupdateB").val();
    var receive_amount = $("#receiveamountupdateB").val();
    var dispatch_amount = $("#dispatchamountupdateB").val();
    var dangerous_or_flammable_cargo = $("#dangerousorflammablecargoupdateB").val();
    var product_status = $("#productstatusupdateB").val();

    const time_now = Date.now();
    var current_time = new Date( time_now );

    var cur_day = current_time.getDate();
    var cur_month = current_time.getMonth()+1;
    var cur_year = current_time.getFullYear();

    var updated_product_registered_day = cur_day + "/" + cur_month + "/" + cur_year;
    console.log("Current Day");
    console.log( updated_product_registered_day );

    var updated_product_registered_time = current_time.toTimeString();

    let update_product_day = await updateProductDay( product_id, updated_product_registered_day );
    let update_product_time = await updateProductTime( product_id, updated_product_registered_time );
    let update_product = await changeProduct( product_id, receive_time, dispatch_time, receive_amount, dispatch_amount, dangerous_or_flammable_cargo, product_status); 
    console.log("Finish updating the product");
}


async function showProductDialog(){

    /*var alert_message = "";
    $('#addproductnameB, #addcompanynameB, #adddispatchtimeB, #addreceivetimeB, #adddispatchamountB,\
      #addreceiveamountB, #addpriceB, #addexporterB, #addconsigneeB, #addmeansoftransportandrouteB,\
      #addincoternsB, #addbillofladingB, #addnumberanddateofinvoiceB, #addcertificatenumberB,\
      #addcompanyaddressB').each( function(){

      if( $(this).val() === ""  ){
        miss_column = $(this).attr("id") ;
        miss_column_name = ProductMissingSearch( miss_column );
        alert_message = alert_message + "\n" + miss_column_name;
      }

    });
    console.log("Ready!!");
    alert('如下欄位請填寫:\n' + alert_message);*/

    /*2020/4/14 add 訂單序號為current_time + random_number*/
    const time_now = Date.now();
    var current_time = new Date( time_now );

    var cur_day = current_time.getDate().toString();
    var cur_month = current_time.getMonth()+1;
    var str_cur_month = cur_month.toString();
    var cur_year = current_time.getFullYear().toString();

    updated_product_registered_day = cur_year + str_cur_month + cur_day;  

    let random_number = parseInt( Math.random() * 1000000 );
    let random_number_string = random_number.toString();

    let time_random_number = random_number_string + updated_product_registered_day;
    window.alert('你已完成此貨物新增\n貨物訂單號碼:'+ time_random_number );
    return time_random_number;

}

async function showBillofLadingDialog(){

     const time_now = Date.now();
     var current_time = new Date( time_now );
     var cur_day = current_time.getDate().toString();
     var cur_month = current_time.getMonth()+1;
     var str_cur_month = cur_month.toString();
     var cur_year = current_time.getFullYear().toString();

     updated_bill_of_lading_registered_day = cur_year + str_cur_month + cur_day;
     let random_number = parseInt( Math.random() * 1000000 );
     let random_number_string = random_number.toString();
     let time_random_number = random_number_string + updated_bill_of_lading_registered_day;
     window.alert('你已完成此提單新增\n提單號碼:'+ time_random_number);
     return time_random_number;

}

async function showLetterofCreditDialog(){

     const time_now = Date.now();
     var current_time = new Date( time_now );
     var cur_day = current_time.getDate().toString();
     var cur_month = current_time.getMonth()+1;
     var str_cur_month = cur_month.toString();
     var cur_year = current_time.getFullYear().toString();

     updated_letter_of_credit_registered_day = cur_year + str_cur_month + cur_day;
     let random_number = parseInt( Math.random() * 1000000 );
     let random_number_string = random_number.toString();
     let time_random_number = random_number_string + updated_letter_of_credit_registered_day;
     window.alert('你已完成此信用狀新增\n信用狀號碼:'+ time_random_number);
     return time_random_number;

}

/*2020/4/16 此ProductMissingSearch 是作為透過product_key查找對應尚未填的product_val*/
function ProductMissingSearch( product_key ){
   
     var Product_dict ={
         addproductnameB: "貨物名稱",
         addcompanynameB: "公司名稱",
         adddispatchtimeB: "派送時間",
         addreceivetimeB: "收貨時間",
         adddispatchamountB: "派送量",
         addreceiveamountB: "收貨量",
         addpriceB: "價格",
         addexporterB: "出口商",
         addconsigneeB: "收貨人",
         addmeansoftransportandrouteB: "運輸方式和路線",
         addincoternsB: "價格條件",
         addbillofladingB: "提單",
         addnumberanddateofinvoiceB: "發票編號和日期",
         addcertificatenumberB: "產品證明號碼",
         addcompanyaddressB: "公司地址",
     }
     missing_product_key = product_key;
     missing_product_val = Product_dict[missing_product_key];
     return missing_product_val;

}

function BillofLadingMissingSearch( bill_of_lading_key ){

     
     var Bill_of_lading_dict = {
         
         addShipperA: "發貨人",
         addConsigneeA: "收貨人",
         addNotifyPartyA: " 通知人",
         addPreCarriageByA: "預先運輸",
         addPlaceofReceiptA: "收貨地點",
         addOceanVesselVoyNoA: "海洋船隻號碼",
         addPortofLoadingA: "裝貨港",
         addPortofDischargeA: "卸貨港",
         addFreightandChargesA: "運費",
         addFinalDestinationA: "目的地",
         addFreightPayableAtA: "貨物付款處",
         addMarksandNumbersA: "標記與號碼",
         addDescriptionA: "描述",
         addGrossWeightA: "毛重",
         addMeasurementA: "測量",
         addTotalPackagesA: "總包裝",
         addPlaceandDateofIssueA: "地點與簽發日期",
         addSignedfortheCarrierA: "承運人簽字人",
     }
     missing_bill_of_lading_key = bill_of_lading_key;
     missing_bill_of_lading_val = Bill_of_lading_dict[ missing_bill_of_lading_key ];
     return missing_bill_of_lading_val;

}

/*2020/4/16 此ProductMissingCheck 是作為查找對應尚未填得欄位
若是找到了,則無法成功新增貨物*/
function ProductMissingCheck(){

     var alert_message = "";
     var should_break;
     $('#addproductnameB, #addcompanynameB, #adddispatchtimeB, #addreceivetimeB, #adddispatchamountB,\
       #addreceiveamountB, #addpriceB, #addexporterB, #addconsigneeB, #addmeansoftransportandrouteB,\
       #addincoternsB, #addbillofladingB, #addnumberanddateofinvoiceB, #addcertificatenumberB,\
       #addcompanyaddressB').each( function(){

         if( $(this).val() === ""  ){
            miss_column = $(this).attr("id") ;
            miss_column_name = ProductMissingSearch( miss_column );
            alert_message = alert_message + "\n" + miss_column_name;
            should_break = true;
         }

      });
      console.log("Ready!!");
      if( should_break ){
        alert('如下欄位請填寫:' + alert_message);
        return true;
      }
      else{
        return false;
      }
}
/*2020/4/16 此BillofLadingMissingCheck 是作為查找對應尚未填得欄位
若是找到了,則無法成功新增提單*/
function BillofLadingMissingCheck(){

     var alert_message = "";
     var should_break;
     $('#addShipperA, #addConsigneeA, #addNotifyPartyA, #addPlaceofReceiptA,\
       #addPortofLoadingA, #addPortofDischargeA, #addFreightandChargesA, #addFinalDestinationA,\
       #addMarksandNumbersA, #addDescriptionA, #addGrossWeightA, #addMeasurementA,\
       #addTotalPackagesA, #addPlaceandDateofIssueA, #addSignedfortheCarrierA').each( function(){

         if( $(this).val() === ""  ){
            miss_column = $(this).attr("id") ;
            miss_column_name = BillofLadingMissingSearch( miss_column );
            alert_message = alert_message + "\n" + miss_column_name;
            should_break = true;
         }

      });
      console.log("Ready!!");
      if( should_break ){
        alert('如下欄位請填寫:' + alert_message);
        return true;
      }
      else{
        return false;
      }
}

async function addUserinfo(){

    var user_name = $("#nameregisterA").val();
    var user_email_address = $("#emailregisterA").val();
    var user_password = $("#passwordregisterA").val();
    let user_registered_info = await setUserInfo( user_name, user_email_address, user_password);   
    console.log("OK_User");
    console.log(user_registered_info);

}


function setUserInfo(user_name, user_email_address, user_password){

  return UserRegisterPseudoRest.methods.setUserInfo(user_name, user_email_address, user_password ).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }     

  });
}


function showUserinfo( user_order_info ){
    
    var show_user_email_address = user_order_info["user_email_address"];
    var show_user_password = user_order_info["user_password"];
    console.log("are_you_ok\n");
    console.log( show_user_email_address );
    console.log("\nare_you_ok\n");
    console.log( show_user_password );

}

function getUserInfo( user_name){

  return UserRegisterPseudoRest.methods.getUserInfo( user_name).call().then( function( user_info){
      return user_info;
  });

}

/*2020/12/7*/
function getBLMappingId(index){

  return BLTransferPseudoRest.methods.getBLMappingId(index).call().then( function(BL_number){
      return BL_number;
  }); 
}

/*2020/12/11*/
function getBLlength(){

  return BLTransferPseudoRest.methods.getBLlength().call().then( function(BL_length){
      return BL_length; 
  });
}


/*2020/12/2 add*/
async function show_recent_bill_of_ladings(){

    var index;
    if ($("#Bill_of_ladings_table tbody").length == 0) {
          
        $("#Bill_of_ladings_table").append("<tbody></tbody>");
    }
    
    var number_of_bol = await getBLlength();
    if( number_of_bol < 0){
        console.log("Registration for BoL is failed");
    }
    console.log("What is the val of Bill of ladings length");
    console.log(number_of_bol);
    // Append BoL to the table
    /*2020/12/8 add*/
    /*var cookie_get = getCookie();*/
    var user_role_option = getCookie("role");
    for(index=0; index<number_of_bol; index++){

        var BL_number = await getBLMappingId(index);

        console.log("What is the val of BL_number");
        console.log( BL_number );
        console.log("The val of index");
        console.log( index);
        var bill_of_lading_info_day = await getbillofladingday(BL_number);
        /*2020/12/12 add*/
        var  user_role_option = getCookie("role");
        if ( user_role_option == "IMP"){

          console.log("Oh yes we get the IMPppping!!!!!!!");
          if ( BL_number>0 ){
            /*2020/12/14 add*/
            $("#Bill_of_ladings_table tbody").append('<tr><td>'+ BL_number +'</td><td>' +
            bill_of_lading_info_day + '</td><td><a href="./product_and_bill_of_lading_logout_status_Importer.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_bol){
            return true;
          }

        }

        if( user_role_option == "EXP"){

          console.log("Oh yes we get the EXP!!!!!!!");
          if ( BL_number>0 ){
            $("#Bill_of_ladings_table tbody").append('<tr><td>'+
            BL_number +'</td><td>' +
            bill_of_lading_info_day + '</td><td><a href="./product_and_bill_of_lading_logout_status_Exporter.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_bol){
            return true;
          }

        }

        if( user_role_option == "CAR"){
            
          console.log("Oh yes we get the CAR!!!!!!!");
          if ( BL_number>0 ){

            $("#Bill_of_ladings_table tbody").append('<tr><td>'+
            BL_number +'</td><td>' +
            bill_of_lading_info_day + '</td><td><a href="./product_and_bill_of_lading_logout_status_Carrier.html">查詢/修改</a></td></tr>');
          }
          if( index+1 == number_of_bol){
            return true;
          }

        }

    }
}


/*2020/12/14 add*/
async function bill_of_ladings_number_link(result){

  if(result){
    
    console.log("are_you_kkkkkk");
    var table = document.getElementById("Bill_of_ladings_table");
    var rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {

      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          console.log("What is the val of cellllllll");
          console.log(cell);
          var id = cell.innerHTML;
          set_cookie_BL_number(id);
        };
      };
      console.log("Man what the heck");
      currentRow.onclick = createClickHandler(currentRow);
    }
  }  
  else{
    console.log("Show recent bill of ladings failed");
  }
}

/*2020/12/14 add*/
async function show_bill_of_ladings_number_and_link(){

  var show_recent_finish_promise = show_recent_bill_of_ladings();
  show_recent_finish_promise.then( function(result){
      bill_of_ladings_number_link(result);
  });

}

async function getUserinfoafteradd(){
    
    var user_name = $("#nameregisterA").val();
    let user_order_info = await getUserInfo( user_name );
    showUserinfo( user_order_info );
    /*console.log("finish showing the user info");*/

}

/*2020/12/15 add*/
function set_cookie_BL_number(BLnumber_val){

  const time_now = Date.now();
  const ten_minutes_time_now = time_now + 10*60*1000;

  var current_time = new Date( time_now );
  var ten_current_time = new Date( ten_minutes_time_now );
  console.log("Current Time");
  console.log( current_time);
  console.log("Ten Current Time");
  console.log( ten_current_time);
  var expires = "expires="+ ten_current_time.toUTCString();
  document.cookie =  "BLnumber=" + BLnumber_val + ";" + expires;

}


/*2020/12/15 add*/
function get_cookie_BL_number(BLnumber_option){

  var _BLnumber = BLnumber_option + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf( _BLnumber ) == 0) {
      return c.substring( _BLnumber.length, c.length);
    }

  }
}



/*2020/06/16 確定可以從網站找到cookie_name*/
/*2020/12/26 this one is new version*/
/*function getCookie(){

  let split_document_cookie = document.cookie.split('=');
  var parsed_document_cookie = JSON.parse(split_document_cookie[0]);
  return parsed_document_cookie;

}*/


/*2020/06/16 確定可以從網站找到cookie_name*/
function getCookie( role_option ){

  var role = role_option + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  /*console.log("The val of ca\n");
  console.log(ca); -> 這行會顯示[“username=John]
  console.log("The length of ca\n");
  console.log(ca.length); -> 這行會顯示1 */

  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf(role) == 0) {
      return c.substring(role.length, c.length);
    }

  }

}

/*2020/12/26 add*/
/*function set_cookie( role_val, pub_key ) {

  const time_now = Date.now();
  const three_minutes_time_now = time_now + 3*60*1000;
  
  var current_time = new Date( time_now );
  var three_current_time = new Date( three_minutes_time_now );
  console.log("Current Time");
  console.log( current_time);
  console.log("Twenty Current Time");
  console.log( three_current_time );
  console.log("Pub_keyiiiii");
  console.log(pub_key);
  var expires = "expires="+ twenty_current_time.toUTCString();

  document.cookie = JSON.stringify({publickey: pub_key, role: role_val});
}*/


function set_cookie(role_val){

    const time_now = Date.now();
    const ten_minutes_time_now = time_now + 10*60*1000;

    var current_time = new Date( time_now );
    var ten_current_time = new Date( ten_minutes_time_now );
    console.log("Current Time");
    console.log( current_time);
    console.log("Ten Current Time");
    console.log( ten_current_time);
    var expires = "expires="+ ten_current_time.toUTCString();
    document.cookie =  "role=" + role_val + ";" + expires;

}



async function check_whether_login_or_not(){

  var user_role_option = getCookie("role");
  console.log("check_whether_login_or_not");
  console.log( user_role_option );
  if( user_role_option == "notset"){
    alert("請先登入");
    window.location.href = './login.html';
  }

}




async function check_cookie(){

  /*add the current time now*/
  const time_now = Date.now();
  /*const ten_minutes_later_time = time_now + 10*60*1000;*/

  var current_time = new Date( time_now );
  /*var ten_minutes_later = new Date( ten_minutes_later_time );*/
  var user_role_option = getCookie("role");
  console.log("The user_role");
  console.log( user_role_option );
  console.log("Current Time");
  console.log( current_time.toUTCString());

  if( user_role_option == "notset"){

        console.log("No role now");
  }
  else{
        console.log("很抱歉,請再執行一次～");
  }

}

function checkaccount(){

  console.log("Yep, how about you");
  var account_one = $("#account_one").val();
  var account_two = $("#account_two").val();
  console.log("What is the val of account_one");
  console.log(account_one);
  console.log("What is the val of account_two")
  console.log(account_two);

}


$(window).load(function() {

    /*2020/6/18 如下為檢查當要進入product_logout或是product_bill_of_lading帳號是否存在*/
    check_whether_login_or_not();
    /*2020/12/8 add*/
    /*show_recent_bill_of_ladings();*/
    setTimeout(function(){
        show_bill_of_ladings_number_and_link();
    },10);

    $('#okBtnA').click( function(){

      setTimeout(function(){
        getBillofladingafteradd();
      },10);

    });

    /*2020/2/23 add*/
    $("#okBtnCheckC").click( function(){
      
      setTimeout(function(){
          getshippingorderafteradd();
        },5000);

    });


    $("#okBtnB").click( function(){

      setTimeout(function(){
          getProductafteradd();
        },10);
    });

    $("#okBtnD").click( function(){
      
      setTimeout(function(){
          getLetterofcreditafteradd();
        },10);
    });

    $("#okBtnClearA").click( function(){
      clearBillofLadinginfo();
    });

    $("#okBtnClearB").click( function(){

      clearProductinfo();

    });

    $("#okBtnClearD").click( function(){
      
      clearLetterofCreditinfo();
    });


    $("#okBtnUpdateA").click( function(){

      check = BillofLadingMissingCheck();
      if( check ){
            console.log("Missing Column Find");
            return;  
      }
      else{
        setTimeout(function(){

            show_bill_of_lading_promise = showBillofLadingDialog();
            show_bill_of_lading_promise.then( function(result){
              addBilloflading(result);
            })
            .catch(function (error){
                console.log( error.message );
            })
        },10);
      }

    });

    $("#okBtnRegisterA").click( function(){

      setTimeout(function(){
          addUserinfo();
      },10);

    });

    $("#okBtnCheckA").click( function(){

      setTimeout(function(){
          getUserinfoafteradd();
      },10);
    });


    /*2020/4/9 號測試showProductDialog() 可以執行*/
    /*2020/4/14 更改*/
    /*再接著透過showProductDialog() return Promise, 並透過callback 將result 傳入
    addProduct() 裡作為完成將號碼和貨物資訊同時寫進blockchain 裡*/
    $("#okBtnUpdateB").click( function(){
      
      check = ProductMissingCheck();
      if( check ){
            console.log("Missing Column Find");
            return;
      }
      else{
        setTimeout(function(){
            
            show_product_promise = showProductDialog();
            show_product_promise.then( function(result){
                addProduct(result);
            })
            .catch(function(error){
                console.log( error.message);
            })

        },10);
      }

    });


    $("#okBtnUpdateD").click( function(){

      setTimeout(function(){
          
          show_letter_of_credit_promise = showLetterofCreditDialog();
          show_letter_of_credit_promise.then( function(result){
              addLetterofcredit(result);
          })
          .catch(function(error){
              console.log( error.message);
          })

      },10);

    });



    $("#okBtnnewUpdateB").click( function(){

      setTimeout(function(){
          updateProduct();
      },10);

    });


    /*2020/7/20 要先在出口國家新增國家才能在之後的新增路線成功*/
    $('#queryproductaddcountryB').click( function(){

      setTimeout(function(){
          newCountry();
      },10);

    })

    /*2020/7/21 新增路線後需要再透過newCountrywithRoute 把剛新增的route放進去*/
    $('#queryproductaddcountryandrouteB').click( function(){

      setTimeout(function(){
          newCountrywithRoute();
      },10);

    })
    
    /*2020/7/20 新增國家存在與否用小方格以確保*/
    $('#okBtnnewCountryQueryB').click( function(){


      setTimeout(function(){
          RouteEvent();
      },10);

    })


    /*2020/7/20 新增了newRoute 的功能*/

    /*2020/7/7 新增了primitiveRouteCheck的功能
    為了顯示從一開始的出口國家到進口國家其路線圖*/
    $('#okBtnnewRouteQueryB').click( function(){

      /*setTimeout(function(){

          primitiveRouteCheck();

      },10);*/


      /*2020/7/8 如下的方法好像行不通*/
      /*const filter = web3.eth.subscribe({

          fromBlock:0,
          toBlock:'latest',
          address:'0xF4799B5d43bF682d9Fb70076C0a09B53c5B3C403',
          topics: [web3.utils.sha3( 'RouteCreated(string,string,string)' )]


      })
      filter.watch((error, result) =>{

          console.log(result);
      })*/

      /*2020/7/8 add once for the contract*/
      /*RoutePseudoRest.once('RouteExists',{

        filter: { _input_country_name: "菲律賓"},
        fromBlock: 49

      },function(error, event ){

        console.log(event);
      });*/


      newRoute();

    });

    /*2020/6/16 確定是如下版本
    如下是給product_and_bill_of_lading_logout 使用的*/
    /*參考連結:
    https://stackoverflow.com/questions/27619604/constant-alert-when-i-click-in-li-element-using-jquery/27619674*/
    $("#product_bill_of_lading_logout ul li.active").click( function(){

        if( confirm("您確定要登出嗎？") ){

            console.log("已確定要登出");
            /*document.cookie = "role=notset; expires=Thu, 18 June 2020 08:20:00 UTC; path=/Users/timothy/eth_todo_list_easy/src/login.html";*/
            /*Here we need to delete the cookie first, then we can set cookie again*/
            set_cookie("notset");
            window.location.href = './login.html';
        }
        else{

            console.log("停留在此頁");
        }

    });

    /*這邊在多加一個屬於product_logout.html*/
    $("#product_logout ul li.active").click( function(){

        if( confirm("您確定要登出嗎？") ){
            
            console.log("已確定要登出");
            set_cookie("notset");
            /*document.cookie = "role=notset; expires=Thu, 18 June 2020 08:20:00 UTC; path=/Users/timothy/eth_todo_list_easy/src/login.html";*/
            window.location.href = './login.html';

        }
        else{
            console.log("停留在此頁");
        }

    });

});

