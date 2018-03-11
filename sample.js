// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
// function genericOnClick(info, tab) {
//   console.log("item " + info.menuItemId + " was clicked");
//   console.log("info: " + JSON.stringify(info));
//   console.log("tab: " + JSON.stringify(tab));
// }

// // Create one test item for each context type.
// var contexts = ["page","selection","link","editable","image","video",
//                 "audio"];
// for (var i = 0; i < contexts.length; i++) {
//   var context = contexts[i];
//   var title = "Test '" + context + "' menu item";
//   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
//                                        "onclick": genericOnClick});
//   console.log("'" + context + "' item:" + id);
// }

function showDatetime(info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

    var t_str = info.selectionText

    var date
    if(t_str.length == 10){
      date = new Date(Number(t_str)*1000);
    }else if(t_str.length == 13){
      date = new Date(Number(t_str));
    }else{
      alert("wrong length");
      return;
    }

    var year = date.getFullYear();
    var mon = date.getMonth();
    var day = date.getDay();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    var formattedTime = year +'-'+ mon +'-'+ day +' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    alert(formattedTime);
}

var id = chrome.contextMenus.create({
    "title": "UnixtimestampTo",
    "contexts": ["selection"],
    "onclick": showDatetime
})

chrome.contextMenus.create({"title": "date", "parentId": id})

// Create a parent item and two children.
// var parent = chrome.contextMenus.create({"title": "Test parent item"});
// var child1 = chrome.contextMenus.create(
//   {"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
// var child2 = chrome.contextMenus.create(
//   {"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
// console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);


// // Create some radio items.
// function radioOnClick(info, tab) {
//   console.log("radio item " + info.menuItemId +
//               " was clicked (previous checked state was "  +
//               info.wasChecked + ")");
// }
// var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
//                                          "onclick":radioOnClick});
// var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
//                                          "onclick":radioOnClick});
// console.log("radio1:" + radio1 + " radio2:" + radio2);


// // Create some checkbox items.
// function checkboxOnClick(info, tab) {
//   console.log(JSON.stringify(info));
//   console.log("checkbox item " + info.menuItemId +
//               " was clicked, state is now: " + info.checked +
//               "(previous state was " + info.wasChecked + ")");

// }
// var checkbox1 = chrome.contextMenus.create(
//   {"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
// var checkbox2 = chrome.contextMenus.create(
//   {"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
// console.log("checkbox1:" + checkbox1 + " checkbox2:" + checkbox2);


// // Intentionally create an invalid item, to show off error checking in the
// // create callback.
// console.log("About to try creating an invalid item - an error about " +
//             "item 999 should show up");
// chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
//   if (chrome.extension.lastError) {
//     console.log("Got expected error: " + chrome.extension.lastError.message);
//   }
// });
